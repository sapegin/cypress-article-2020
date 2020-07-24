describe('Sign up', () => {
  it('should show success page after submission', () => {
    cy.visit('/signup');

    cy.log('Filling the form');
    cy.findByLabelText(/first name/i)
      .clear()
      .type('Chuck');
    cy.findByLabelText(/last name/i)
      .clear()
      .type('Norris');
    cy.findByLabelText(/country/i).select('Russia');
    cy.findByLabelText(/english/i).check();
    cy.findByLabelText(/subscribe to our newsletter/i).check();

    cy.log('Submit the form');
    cy.findByRole('button', { name: /sign in/i }).click();

    cy.log('We are on the success page');
    cy.findByText(/thank you for signing up/i).should('be.visible');
  });

  it('should fill passport details', () => {
    cy.visit('/signup');

    cy.log('Filling passport number');
    cy.findByLabelText(/passport number/i)
      .clear()
      .type('858123857');

    cy.log('Filling passport issue date');
    cy.findByRole('group', { name: /passport issue date/i }).within(() => {
      cy.findByLabelText(/day/i).clear().type('12');
      cy.findByLabelText(/month/i).select('5');
      cy.findByLabelText(/year/i).clear().type('2004');
    });

    cy.log('Filling passport expiration date');
    cy.findByRole('group', { name: /passport expiration date/i }).within(() => {
      cy.findByLabelText(/day/i).clear().type('17');
      cy.findByLabelText(/month/i).select('11');
      cy.findByLabelText(/year/i).clear().type('2024');
    });

    cy.log('Submit the form');
    cy.findByRole('button', { name: /sign in/i }).click();

    cy.log('We are on the success page');
    cy.findByText(/thank you for signing up/i).should('be.visible');
  });

  it('should have a link to terms and conditions', () => {
    cy.visit('/signup');

    cy.log('Check the link href');
    cy.findByRole('link', { name: /terms and conditions/i })
      .should('have.attr', 'href')
      .and('include', '/toc');

    cy.log('Removing target and clicking');
    cy.findByRole('link', { name: /terms and conditions/i })
      .invoke('removeAttr', 'target')
      .click();
    cy.findByText(/i'm baby/i).should('be.visible');
  });

  ['iphone-x', 'macbook-15'].forEach((viewport) => {
    it(`should show success page after submission (${viewport})`, () => {
      cy.viewport(viewport);
      cy.visit('/signup');

      cy.log('Filling the form');
      cy.findByLabelText(/first name/i)
        .clear()
        .type('Chuck');
      cy.findByLabelText(/last name/i)
        .clear()
        .type('Norris');

      cy.log('Submit the form');
      cy.findByRole('button', { name: /sign in/i }).click();

      cy.log('We are on the success page');
      cy.findByText(/thank you for signing up/i).should('be.visible');
    });
  });
});
