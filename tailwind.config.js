/** @type {import("tailwindcss").Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./constants/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
        },
        light: {
            primary: "#1E88E5",
            secondary: "#7CB342",
            accent: "#F4511E",
            neutral: "#757575",
            "base-100": "#FAFAFA",
            info: "#039BE5",
            success: "#43A047",
            warning: "#FFB300",
            error: "#E53935",
        },
        dark: {
            primary: "#90CAF9",
            secondary: "#C5E1A5",
            accent: "#FF7043",
            neutral: "#ECEFF1",
            "base-100": "#263238",
            info: "#4FC3F7",
            success: "#81C784",
            warning: "#FFD54F",
            error: "#EF5350",
        },
    },
    plugins: [
        require("daisyui"),
    ],
    daisyui: {
        themes: [
            {
                light: {
                    primary: "#1E88E5",
                    secondary: "#7CB342",
                    accent: "#F4511E",
                    neutral: "#757575",
                    "base-100": "#FAFAFA",
                    info: "#039BE5",
                    success: "#43A047",
                    warning: "#FFB300",
                    error: "#E53935",
                },
                dark: {
                    primary: "#90CAF9",
                    secondary: "#C5E1A5",
                    accent: "#FF7043",
                    neutral: "#ECEFF1",
                    "base-100": "#263238",
                    info: "#4FC3F7",
                    success: "#81C784",
                    warning: "#FFD54F",
                    error: "#EF5350",
                },
            }
        ],
    },
};
