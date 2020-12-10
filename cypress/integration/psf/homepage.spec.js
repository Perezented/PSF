/// <reference types="cypress" />

context("rendersHomePage", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });
  it("contains header and nav", () => {
    cy.contains("Home");
    cy.contains("Gallery");
    cy.contains("Contact Us");
  });
  it("company name is on the homepage", () => {
    cy.contains(/Pro-select Flooring/i).should("be.visible");
  });
  it("Items in we do more show up", () => {
    cy.contains(/Bronco/i)
      .scrollIntoView()
      .should("be.visible");
  });
  it("Contains footer", () => {
    cy.scrollTo("bottom");
    cy.contains("All rights").should("be.visible");
  });
});
