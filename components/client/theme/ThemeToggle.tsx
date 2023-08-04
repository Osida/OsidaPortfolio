"use client";
import React, {useContext} from "react";
import {ThemeContext} from "@/components/client/theme/ThemeProvider";
import {BsFillMoonFill, BsFillSunriseFill} from "react-icons/bs";
import {ThemeType} from "@/types";

export const ThemeToggle = ({styles}: { styles: string }) => {
    const {theme, setTheme} = useContext(ThemeContext);

    const handleThemeChange = () => {
        const newTheme: ThemeType = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        console.log("Theme changed to", theme);
    };

    return (
        <button className="btn btn-ghost" onClick={handleThemeChange}>
            {theme === "light" ? <BsFillMoonFill className={styles}/> : <BsFillSunriseFill className={styles}/>}
        </button>
    );
};
