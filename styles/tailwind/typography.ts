const weights = {
    normal: 400,
    medium: 500,
    bold: 700,
};

const typography = {
    fontFamily: {
        // sans: ["Roboto", "sans-serif"],
        // serif: ["Times New Roman", "serif"],
        "roboto": ["Roboto", "sans-serif"],
        "open-sans": ["Open Sans", "sans-serif"],
    },
    fontWeight: {
        "h1": weights.bold,
        "h2": weights.bold,
        "h3": weights.bold,
        "h4": weights.bold,
        "h5": weights.bold,
        "h6": weights.bold,
        "subtitle1": weights.normal,
        "subtitle2": weights.normal,
        "body1": weights.normal,
        "body2": weights.normal,
        "button": weights.medium,
        "caption": weights.normal,
        "overline": weights.normal,
    },
    // Add more typography related configurations...
};

export default typography;
