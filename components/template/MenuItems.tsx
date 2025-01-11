/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Link from "next/link"

interface MenuItemProps {
    url: string
    text: string
    icon: any
    className?: string
    onClick?: () => void;
}

export default function MenuItem(props: MenuItemProps) {

    function renderLink() {
        return (
            <div className={`flex flex-col justify-center w-20 h-20 hover:bg-gray-300 cursor-pointer`}>
                <li className={`justify-items-center text-xs font-light text-gray-600`}
                    >
                        {props.icon}
                    <span>
                        {props.text}
                    </span>

                </li>
            </div>
        )
    }
    return (
        <div>

            {props.url ? (
                <Link
                    href={props.url}>
                    {renderLink()}
                </Link>
            ) : (
                renderLink()
            )}

        </div>
    )
}