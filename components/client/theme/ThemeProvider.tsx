"use client";
import React, {createContext, ReactNode, useEffect, useState} from "react";

export type ThemeType = "light" | "dark";

export type ThemeContextType = {
    theme: ThemeType;
    setTheme: (theme: ThemeType) => void;
};

export type ThemeProviderType = {
    children: ReactNode | ReactNode[];
};

export const ThemeContext = createContext<ThemeContextType>({
    theme: "dark",
    setTheme: (theme) => {
        throw new Error("ThemeContext provider is missing.");
    },
});

export const ThemeProvider = ({children}: ThemeProviderType) => {
    const [theme, setTheme] = useState<ThemeType>("dark");

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
    }, [theme]);

    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            {children}
        </ThemeContext.Provider>
    );
};
