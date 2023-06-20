import React from "react";
import { ThemeContext, themes } from "../context/ThemeContext";
const getTheme = ()=>{
    const theme = `${window?localStorage?.getItem("theme"):null}`
    if (Object.values(themes).includes(theme)) return theme
    else return themes.dark
}
export const ThemeProvider = ({children})=>{
    const [theme, setTheme] = React.useState(getTheme)
    React.useEffect(()=>{
        document.documentElement.dataset.theme=theme
        localStorage.setItem("theme", theme)
    }, [theme])
    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}