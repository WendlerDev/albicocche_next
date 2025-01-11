/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Link from "next/link";

interface MenuItemProps {
  url: string;
  text: string;
  icon: any;
  className?: string;
  onClick?: () => void;
}

export default function MenuItem(props: MenuItemProps) {
  function renderLink() {
    return (
      <div
        className={`
          flex 
          flex-col 
          justify-center 
          w-20 h-20 
          transition duration-200
          ease-in-out
          hover:bg-gray-300
          dark:hover:bg-gray-800
          cursor-pointer
        `}
      >
        <li
          onClick={props.onClick}
          className={`
            justify-items-center 
            text-xs font-light 
            dark:text-gray-100
          `}
        >
          <div
            className={`
              flex flex-col items-center 
            ${props.className ?? ""}
            `}
            >
              <span>{props.icon}</span>
              <span>{props.text}</span>
          </div>
        </li>
      </div>
    );
  }

  return (
    <div>
      {props.url ? (
        <Link href={props.url}>{renderLink()}</Link>
      ) : (
        renderLink()
      )}
    </div>
  );
}

