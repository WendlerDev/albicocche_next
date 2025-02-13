"use client"
import { createContext, ReactNode, useState } from "react";

type Theme = "dark" | ""

interface AppContextProps {
    theme: Theme | null
    toggleTheme?: () => void
}
const AppContext = createContext<AppContextProps>({
    theme: null,
    toggleTheme: () => {}, })

export function AppProvider({ children }: { children: ReactNode }) {

    const[theme, setTheme] = useState<Theme>("")

    function toggleTheme() {
        setTheme(theme === "" ? "dark" : "")
    }

    return (
        <AppContext.Provider value={{ theme, toggleTheme }}>
        {children}
      </AppContext.Provider>
    )
}

export default AppContext
