/// <reference types="cypress" />

context("Renders contact page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/contact/");
  });
  it("contains main h1", () => {
    cy.contains("Contact Pro-Select Flooring");
  });
  it("has business hours visible", () => {
    cy.contains("Business Hours").should("be.visible");
    cy.contains(/We will respond: Mon-Fri 8am - 5pm/i).should("be.visible");

    cy.contains(
      /Call or text anytime! If we are not available, please leave a voicemail or text message./i
    ).should("be.visible");
  });
  it("types into the form", () => {
    cy.get("#name").click().type("Name Here");
    cy.get("#email").click().type("EmailTyped@Here.com");
    cy.get("#subject").click().type("Subject Typed Here");
    cy.get("#message").click().type("Message Message Message Message Here");
  });
});
