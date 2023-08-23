import {AnimatedArrow} from "@/components/client";

describe("AnimatedArrow Component", () => {
    beforeEach(() => {
        // Mount the component before each test
        cy.mount(<AnimatedArrow/>);
    });

    it("should render the AnimatedArrow component and its elements", () => {
        cy.get("[data-cy=animated-arrow-container]").should("exist");
        cy.get("[data-cy=arrow-icon]").should("exist");
        cy.get("[data-cy=arrow-text]").should("contain", "My Projects");
    });

    it("should navigate to /projects when clicked", () => {
        cy.get("[data-cy=arrow-link]").should("have.attr", "href").and("include", "/projects");
    });

    // Animation tests
    it("should have the correct initial animation state", () => {
        cy.get("[data-cy=animated-arrow-container]").should("have.css", "transform").and("include", "matrix(1, 0, 0, 1, -10, 0)");
    });
});