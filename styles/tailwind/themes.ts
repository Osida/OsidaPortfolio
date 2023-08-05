export const lightTheme = {
    primary: "rgb(248, 248, 248)", /* White */
    secondary: "rgb(234, 234, 234)", /* Light Gray */
    accent1: "rgb(74, 144, 226)", /* Sky Blue */
    accent2: "rgb(0, 184, 148)", /* Light Green */
};

export const darkTheme = {
    primary: "rgb(27, 27, 27)", /* Black */
    secondary: "rgb(47, 47, 47)", /* Dark Gray */
    accent1: "rgb(232, 67, 147)", /* Pink */
    accent2: "rgb(52, 152, 219)", /* Dark Blue */
};

const lightColorScheme = {
    backgroundPrimary: lightTheme.primary, // White
    backgroundSecondary: lightTheme.secondary, // Light Gray
    textPrimary: darkTheme.primary, // Black
    textSecondary: darkTheme.secondary, // Dark Gray
    buttonPrimary: lightTheme.accent1, // Sky Blue
    buttonSecondary: lightTheme.accent2, // Light Green
    icon: darkTheme.primary, // Black
    iconHover: lightTheme.accent1, // Sky Blue
}

const darkColorScheme = {
    backgroundPrimary: darkTheme.primary, // Black
    backgroundSecondary: darkTheme.secondary, // Dark Gray
    textPrimary: lightTheme.primary, // White
    textSecondary: lightTheme.secondary, // Light Gray
    buttonPrimary: darkTheme.accent1, // Pink
    buttonSecondary: darkTheme.accent2, // Dark Blue
    icon: lightTheme.primary, // White
    iconHover: darkTheme.accent1, // Pink
}