describe('template spec', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:3000/');
  });

  it("check for default values", () => {
    cy.get("[data-cy=status-widget]").should("have.text", "Not Delivered");
    cy.get("[data-cy=delivery-count]").should("have.text", "0");
    cy.get("[data-cy=deliver]").should("have.text", "Deliver");
    cy.get("[data-cy=not-deliver]").should("have.text", "Not Deliver");
  });

  it("should update the status widget and increment the counter after Deliver button clicked", () => {
    cy.get("[data-cy=deliver]").click();
    cy.get("[data-cy=status-widget]").should("have.text", "Delivered");
    cy.get("[data-cy=delivery-count]").should("have.text", "1");
  });

  it("should decrement the counter after Not-deliver button clicked", () => {
    cy.get("[data-cy=deliver]").click();
    cy.get("[data-cy=not-deliver]").click();
    cy.get("[data-cy=delivery-count]").should("have.text", "0");
  });

  it("should check Not-deliver disabled by default", () => {
    cy.get("[data-cy=not-deliver]").should("be.disabled");
    cy.get("[data-cy=deliver]").should("not.be.disabled");
  });

  it("should check not-deliver disabled after the counter reaches 0 and avoid neagtive values", () => {
    cy.get("[data-cy=deliver]").click();
    cy.get("[data-cy=deliver]").click();
    cy.get("[data-cy=delivery-count]").should("have.text", "2");
    cy.get("[data-cy=not-deliver]").should("not.be.disabled");
    cy.get("[data-cy=not-deliver]").click();
    cy.get("[data-cy=not-deliver]").click();
    cy.get("[data-cy=delivery-count]").should("have.text", "0");
    cy.get("[data-cy=not-deliver]").should("be.disabled");
  });
})