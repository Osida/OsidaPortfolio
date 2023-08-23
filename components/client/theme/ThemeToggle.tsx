"use client";
import React, {useContext} from "react";
import {ThemeContext, ThemeType} from "@/context/ThemeProvider";
import {BsFillMoonFill, BsFillSunriseFill} from "react-icons/bs";

export const ThemeToggle = ({styles}: { styles: string }) => {
    const {theme, setTheme} = useContext(ThemeContext);

    const handleThemeChange = () => {
        const newTheme: ThemeType = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
    };

    return (
        <button className="btn btn-ghost" data-cy="theme-toggle-button" onClick={handleThemeChange}>
            {
                theme === "light" ?
                    <BsFillMoonFill className={styles} data-cy="moon-icon"/> :
                    <BsFillSunriseFill className={styles} data-cy="sun-icon"/>
            }
        </button>
    );
};
