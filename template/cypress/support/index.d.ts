/// <reference types="cypress" />

declare global {
  namespace Cypress {
    interface Chainable {
      google(): Chainable;
    }
  }
}

export {};
