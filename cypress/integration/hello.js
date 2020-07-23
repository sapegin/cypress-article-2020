it('hello world', () => {
  cy.visit('/');
  cy.findByText(/pizza/i).should('be.visible');
});

it('navigates to another page', () => {
  cy.visit('/');

  cy.log('Opening the pizza page');
  cy.findByRole('link', { name: /remotepizza/i }).click();

  cy.log('We are on the pizza page');
  cy.findByRole('heading', { name: /pizza/i }).should('be.visible');
});
