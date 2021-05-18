describe("User can navigate from the root to the final workout page", () => {
  it("should visit root and navigate to the muscle group page", () => {
    cy.visit("/");
  });

  xit("should load the main page video", () => {
    // cy.get("[data-cy=herovideo]").should("include", "go-the-distance");
  });

  it("should play video", () => {
    // cy.get("[data-cy=herovideo]").then(($el) => {
    //   Cypress.dom.unwrap($el);
    // });

    cy.get("video").should("have.attr", "src");
    // .its()
    // .should("/videos/go-the-distance");
    // cy.get("video").then(($el) => {
    //   Cypress.dom.unwrap($el);
    // });
  });

  it("should navigate to the muscle group page", () => {
    cy.get("[data-cy=buildworkout]").click();
  });

  it("should select legs, cardio, and chest muscle groups.", () => {
    cy.get("[data-cy=muscleid0]").click();
    cy.get("[data-cy=muscleid5]").click();
    cy.get("[data-cy=muscleid6]").click();
  });

  it("should click generate exercises button and then navigate to the exercise list page with the selected muscle groups.", () => {
    cy.get("[data-cy=generate]").click();

    cy.get("[alt='Avatar n°16']")
      .find("img")
      .should("have.attr", "src")
      .should(
        "include",
        "https://images.unsplash.com/flagged/photo-1566064352554-f36ef0ef23b2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c3F1YXQlMjB3b3Jrb3V0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
      );
  });

  it("should select exercise IDs 16, 26, and 7, for Squats, Jumping Jacks, and Push Ups respectively", () => {
    cy.get("[data-cy=exercisetableid16]").contains("Legs").click();
    cy.get("[data-cy=exercisetableid26]").contains("Cardio").click();
    cy.get("[data-cy=exercisetableid7]").contains("Chest").click();
  });

  it("should create workout that includes Squats, Jumping Jacks, and Push Ups", () => {
    cy.get("[data-cy=generate]").click();
    cy.get("[data-cy=workoutexerciseid16]")
      .get("[data-cy=workoutexerciseid26]")
      .get("[data-cy=workoutexerciseid7]")
      .click();
  });
});
