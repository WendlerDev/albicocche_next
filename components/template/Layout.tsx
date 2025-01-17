"use client";
import { ReactNode, useEffect } from "react";
import { useRouter } from "next/navigation";
import Content from "./Content";
import SideBar from "./SideBar";
import TopBar from "./TopBar";
import useAppData from "@/data/hook/useAppData";
import useAuth from "@/data/hook/useAuth";

interface LayoutProps {
  title: string;
  subtitle: string;
  children?: ReactNode;
}

export default function Layout(props: LayoutProps) {
  const { theme } = useAppData();
  const { user, loading } = useAuth(); // Obtém informações do usuário a partir do contexto
  const router = useRouter();

  // useEffect(() => {
  //   // Redireciona para a página de login se o usuário não estiver autenticado
  //   if (!loading && !user) {
  //     router.push("/login");
  //   }
  // }, []); // Adiciona as dependências ao useEffect



  return (
    <div className={`${theme} flex h-screen w-screen`}>
      <SideBar />
      <div className="flex flex-col w-full p-7 bg-gray-400 dark:bg-slate-800">
        <TopBar title={props.title} subtitle={props.subtitle} />
        <Content>{props.children}</Content>
      </div>
    </div>
  );
}



