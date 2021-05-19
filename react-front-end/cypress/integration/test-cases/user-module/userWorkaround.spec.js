describe("User workarounds", () => {
  beforeEach(() => {
    //  cy.request("GET", "/api/debug/reset"); TODO: IMPLEMENT
    cy.visit("/");

    cy.contains("WoFroH");

    cy.get("video").should("have.attr", "src");
  });

  it("should navigate from the root to the final workout page, with 3 different muscle group exercises.", () => {
    cy.get("[data-cy=buildworkout]").click();

    cy.get("[data-cy=muscleid0]").click();
    cy.get("[data-cy=muscleid5]").click();
    cy.get("[data-cy=muscleid6]").click();

    cy.get("[data-cy=generate]").click();
    cy.get("[alt='Avatar n°16']")
      .find("img")
      .should("have.attr", "src")
      .should(
        "include",
        "https://images.unsplash.com/flagged/photo-1566064352554-f36ef0ef23b2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c3F1YXQlMjB3b3Jrb3V0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
      );

    cy.get("[data-cy=exercisetableid16]").contains("Legs").click();
    cy.get("[data-cy=exercisetableid26]").contains("Cardio").click();
    cy.get("[data-cy=exercisetableid7]").contains("Chest").click();

    cy.get("[data-cy=generate]").click();
    cy.get("[data-cy=workoutexerciseid16]")
      .get("[data-cy=workoutexerciseid26]")
      .get("[data-cy=workoutexerciseid7]")
      .click();
  });

  it("should navigate to the saved workouts page to select a workout, and go to that saved workout page", () => {
    cy.get("li").contains("My Workouts").click();
    cy.get("h1.saved-title").contains("Your Saved Workouts");

    cy.get("li").contains("My Workouts").click();
    cy.get("h1.saved-title").contains("Your Saved Workouts");

    cy.get("[data-cy=savedid1]").contains("GO").click();
    cy.get("[data-cy=workoutexerciseid2]")
      .contains("Tricep Dips")
      .should("exist");
  });

  it("should navigate to the saved workouts page to delete a saved workout", () => {
    cy.get("li").contains("My Workouts").click();
    cy.get("h1.saved-title").contains("Your Saved Workouts");

    cy.get("li").contains("My Workouts").click();
    cy.get("h1.saved-title").contains("Your Saved Workouts");

    cy.get("[data-cy=savedid3]").contains("DELETE").click();
    cy.contains("[data-cy=savedid3]").should("not.exist");
  });
});
