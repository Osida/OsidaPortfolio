import Home from "@/app/page";

describe("Home Page", () => {
    beforeEach(() => {
        cy.mount(<Home/>);
    });

    it("should render the main container", () => {
        cy.get("[data-cy=main-container]").should("exist");
    });

    it("should render motion heading and paragraph", () => {
        cy.get("[data-cy=motion-heading]").should("exist");
        cy.get("[data-cy=motion-paragraph]").should("exist");
    });

    it("should contain the animated arrow component", () => {
        cy.get("[data-cy=animated-arrow-wrapper]").should("exist");
    });
});
