"use client";
import React, {createContext, useEffect, useState} from "react";
import {ThemeType, ThemeContextType, ThemeProviderType} from "@/types";

export const ThemeContext = createContext<ThemeContextType>({
    theme: "dark",
    setTheme: (theme) => {
        throw new Error("ThemeContext provider is missing.");
    },
});

export const ThemeProvider: React.FC<ThemeProviderType> = ({children}) => {
    // Set the initial theme to "dark" or read from local storage
    const [theme, setTheme] = useState<ThemeType>("dark");

    // Apply the theme to the app when the theme changes
    useEffect(() => {
        // Use CSS variables to apply the theme styles to the app
        document.documentElement.setAttribute("data-theme", theme);
    }, [theme]);

    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            {children}
        </ThemeContext.Provider>
    );
};
