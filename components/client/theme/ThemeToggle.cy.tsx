import {ThemeProvider, ThemeContext} from "@/context/ThemeProvider";
import {ThemeToggle} from "@/components/client/theme/ThemeToggle";

// Helper function to toggle theme and check icon
const toggleThemeAndCheckIcon = (expectedTheme: string, expectedIcon: string) => {
    cy.get("[data-cy=theme-toggle-button]").click();
    cy.get("html").should("have.attr", "data-theme", expectedTheme).then(() => {
        cy.get(`[data-cy=${expectedIcon}]`).should("exist");
    });
};

describe("ThemeToggle Component", () => {
    beforeEach(() => {
        // Mount the component before each test
        cy.mount(
            <ThemeProvider>
                <ThemeToggle styles="text-2xl"/>
            </ThemeProvider>
        );
    });

    it("renders", () => {
        cy.get("[data-cy=theme-toggle-button]").should("exist");
    });

    it("should toggle the theme to 'light' and display the moon icon when clicked", () => {
        toggleThemeAndCheckIcon("light", "moon-icon");
    });

    it("should toggle the theme to 'dark' and display the sun icon when clicked twice", () => {
        toggleThemeAndCheckIcon("light", "moon-icon");
        toggleThemeAndCheckIcon("dark", "sun-icon");
    });
})
;