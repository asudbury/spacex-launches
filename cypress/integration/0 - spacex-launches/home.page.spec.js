describe('Visit Home Page', () => {
  it('Visits the Home Page', () => {
    cy.visit('https://asudbury.github.io/spacex-launches/');
    cy.contains('Flight');
    cy.contains('Mission');
    cy.contains('Launch Date');
    cy.contains('Details');
  });
});
