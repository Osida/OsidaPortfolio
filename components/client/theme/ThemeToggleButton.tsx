"use client";
import React, {useContext} from "react";
import {ThemeContext} from "@/components/client/theme/Theme";
import {BsFillMoonFill, BsFillSunriseFill} from "react-icons/bs";

export const ThemeToggleButton = ({styles}: { styles: string }) => {
    const {theme, setTheme} = useContext(ThemeContext);

    return (
        <button
            className="btn btn-ghost"
            onClick={() =>
                setTheme(prevTheme => (prevTheme === "light" ? "dark" : "light"))
            }
        >
            {theme === "light" ? <BsFillMoonFill className={styles}/> : <BsFillSunriseFill className={styles}/>}
        </button>
    );
};
