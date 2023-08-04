/** @type {import("tailwindcss").Config} */
import typography from "./styles/tailwind/typography";
import {darkTheme, lightTheme} from "./styles/tailwind/themes";

module.exports = {
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
            }
        },
    },
    plugins: [
        require("daisyui"),
    ],
    daisyui: {
        themes: [
            {
                light: lightTheme,
                dark: darkTheme,
            }
        ],
    },
};
