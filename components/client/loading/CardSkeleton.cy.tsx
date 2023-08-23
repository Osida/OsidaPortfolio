import CardSkeleton from "@/components/client/loading/CardSkeleton";
import {ThemeProvider} from "@/context/ThemeProvider";

describe("CardSkeleton Component", () => {
    beforeEach(() => {
        cy.mount(
            <ThemeProvider>
                <CardSkeleton/>
            </ThemeProvider>
        );
    });

    it("should render the CardSkeleton container", () => {
        cy.get("[data-cy=card-skeleton-container]").should("exist");
    });

    // it("should render the skeleton element", () => {
    //     cy.get("[data-cy=skeleton-element]").should("exist");
    // });

    // it("should have the correct colors based on the theme", () => {
    //     // Wait for the skeleton to appear before checking its styles
    //     cy.get("[data-cy=skeleton-element]")
    //         .should("have.css", "background-color", "#2f2f2f")
    //         .and("have.css", "border-color", "#1b1b1b");
    // });
});
