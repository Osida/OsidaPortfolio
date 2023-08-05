/** @type {import("tailwindcss").Config} */
import typography from "./styles/tailwind/typography";
import {darkTheme, lightTheme} from "./styles/tailwind/themes";

module.exports = {
    darkMode: "class",
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./constants/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: typography.fontFamily,
            fontWeight: typography.fontWeight,
            colors: {
                light: lightTheme,
                dark: darkTheme,
                primary: "rgb(var(--color-primary) / <alpha-value>)",
                secondary: "rgb(var(--color-secondary) / <alpha-value>)",
                accent1: "rgb(var(--color-accent1) / <alpha-value>)",
                accent2: "rgb(var(--color-accent2) / <alpha-value>)",
                fontColor: "rgb(var(--color-font) / <alpha-value>)",
            },
        },
    },
    plugins: [
        require("daisyui"),
    ],
    // daisyui: {
    //     themes: [
    //         {
    //             light: lightTheme,
    //             dark: darkTheme,
    //         }
    //     ],
    // },
};
