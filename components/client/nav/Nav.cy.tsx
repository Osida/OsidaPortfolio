import React from "react";
import {Nav} from "@/components/client";
import {navLinks} from "@/constants";

describe("Nav Component", () => {
    beforeEach(() => {
        // Mount the component before each test
        cy.mount(<Nav/>);
    });

    it("renders", () => {
        cy.get("[data-cy=nav-container]").should("exist");
    });

    it("should display the navigation bar after animation", () => {
        cy.checkVisibleAfterAnimation("[data-cy=nav-container]", 1000);
    });

    it("should display all navigation links with correct icons", () => {
        navLinks.forEach(({name}) => {
            cy.get(`[data-cy=nav-link-${name}]`).within(() => {
                cy.get(`[data-cy=nav-link-content-${name}]`).should("be.visible");
                cy.get(`[data-cy=nav-link-icon-${name}]`).should("be.visible");
            });
        });
    });

    // ... (other test cases, such as simulating clicks)
});
