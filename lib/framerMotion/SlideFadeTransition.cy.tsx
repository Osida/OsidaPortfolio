import {SlideFadeTransition} from "@/lib";

describe("SlideFadeTransition Component", () => {
    beforeEach(() => {
        cy.mount(
            <SlideFadeTransition path="/">
                <div>Test Child</div>
            </SlideFadeTransition>
        );
    });

    it("should render the slide-fade-transition container", () => {
        cy.get("[data-cy=slide-fade-transition]").should("exist");
    });

    it("should contain the child element", () => {
        cy.get("[data-cy=slide-fade-transition]").should("contain", "Test Child");
    });
});
