describe("User can navigate to their saved workouts, and can delete or go to a saved workout", () => {
  it("should visit root and navigate to the saved workouts page", () => {
    cy.visit("/");
    cy.get("li").contains("My Workouts").click();
    cy.get("h1.saved-title").contains("Your Saved Workouts");
  });

  it("should visit root and navigate to the saved workouts page", () => {
    cy.get("li").contains("My Workouts").click();
    cy.get("h1.saved-title").contains("Your Saved Workouts");
  });

  it("should delete a saved workout", () => {
    cy.get("[data-cy=saved3]").contains("Delete").click();
    cy.contains("[data-cy=saved3]").should("not.exist");
  });

  it("should go to a saved workout page", () => {
    cy.get("[data-cy=saved1]").contains("Delete").click();
    cy.contains("[data-cy=workoutexerciseid2]").should("exist");
  });
});
