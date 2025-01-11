/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { ReactNode } from "react"
import Content from "./Content"
import SideBar from "./SideBar"
import TopBar from "./TopBar"
import useAppData from "@/data/hook/useAppData";

interface LayoutProps {
    title: string
    subtitle: string
    children?: ReactNode
}

export default function Layout(props: LayoutProps) {

    const {theme} = useAppData()
    console.log(theme)

    return (
            <div className={`${theme} flex h-screen w-screen`}>
                <SideBar />
                <div className={`
            flex flex-col 
            w-full p-7 
            bg-gray-400
            dark:bg-slate-800
                `}>
                    <TopBar title={props.title} subtitle={props.subtitle} />
                    <Content> {props.children} </Content>
                </div>
            </div>
    )
}