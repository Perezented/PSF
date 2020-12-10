/// <reference types="cypress" />

context("renders gallery", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/gallery");
  });

  it("company name is on the gallery page", () => {
    cy.contains(/Pro-select/i).should("be.visible");
  });

  it("Contains images loaded in from S3", () => {
    cy.get("div[class='imgContainer']>img").should("be.visible");
    cy.get("div[class='imgContainer']")
      .wait(2000)
      .find("img")
      .should("have.length", 7);
  });

  it("Fetches more images", () => {
    cy.wait(2000).scrollTo("bottom");
    cy.get("div[class='imgContainer']")
      .wait(2000)
      .find("img")
      .should("have.length.above", 7);
  });

  it("opens up modal on image click and contains clicked image", () => {
    cy.get("div[class='imgContainer']>img").should("be.visible");
    cy.get("div[class='imgContainer']").wait(2000).find("img").first().click();
    cy.wait(2000);
    cy.get("section[class='visible']").should("be.visible").find("img");
  });
});
