declare namespace Cypress {
    interface Chainable {
        /**
         * Custom command to check an element's visibility after a specified animation timeout.
         * @param {string} selector - The selector for the element to check.
         * @param {number} timeout - The timeout in milliseconds to wait for the element to become visible.
         * @example cy.checkVisibleAfterAnimation('[data-cy=nav-container]', 1000)
         */
        checkVisibleAfterAnimation(selector: string, timeout?: number): Chainable<Element>;
    }
}
