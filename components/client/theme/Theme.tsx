"use client";
import React, {createContext, useEffect, useState} from "react";

type ThemeContextType = {
    theme: string;
    setTheme: React.Dispatch<React.SetStateAction<string>>;
};

export const ThemeContext = createContext<ThemeContextType>({
    theme: "light",
    setTheme: theme => console.warn("no theme provider"),
});

type ThemeProviderProps = {
    children: React.ReactNode;
};

export const ThemeProvider: React.FC<ThemeProviderProps> = ({children}) => {
    const [theme, setTheme] = useState<string>("dark");

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
    }, [theme]);

    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            {children}
        </ThemeContext.Provider>
    );
};
