import {Banner} from "@/components/client";
import {socialLinks} from "@/constants";

describe("Banner Component", () => {
    beforeEach(() => {
        cy.mount(<Banner title={"Osida Richards"}/>);
    });

    it("renders", () => {
        cy.get("[data-cy=banner-container]").should("exist");
    });

    it("should display after animation", () => {
        cy.checkVisibleAfterAnimation("[data-cy=banner-container]", 1000);
    });

    it("should display title", () => {
        cy.get("[data-cy=banner-title]").should("be.visible");
    });

    it("should display correct title text", () => {
        cy.get("[data-cy=banner-title]").should("contain.text", "Osida Richards");
    });

    it("should have correct social link URLs and target attributes", () => {
        socialLinks.forEach(({name, path}) => {
            cy.get(`[data-cy=social-link-${name}] a`)
                .should("have.attr", "href", path)
                .and("have.attr", "target", "_blank")
                .and("have.attr", "rel", "noopener noreferrer");
        });
    });

    it("should display all social links with correct icons", () => {
        socialLinks.forEach(({name}) => {
            cy.get(`[data-cy=social-link-${name}]`).within(() => {
                cy.get(`[data-cy=social-link-icon-${name}]`).should("be.visible");
            });
        });
    });

    // Additional tests can go here
});