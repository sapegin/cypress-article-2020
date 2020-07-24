describe('Remote pizza', () => {
  const ingredients = ['bacon', 'tomato', 'mozzarella', 'pineapples'];

  it('load ingredients asynchronously', () => {
    cy.visit('/remote-pizza');

    cy.log('Ingredients list is not visible');
    cy.findByText(ingredients[0]).should('not.be.visible');

    cy.log('Load ingredients');
    cy.findByRole('button', { name: /cook/i }).click();

    cy.log('All ingredients appear on the screen');
    for (const ingredient of ingredients) {
      cy.findByText(ingredient).should('be.visible');
    }

    cy.log('The button is not clickable anymore');
    cy.findByRole('button', { name: /cook/i }).should('be.disabled');
  });

  it('shows an error message', () => {
    cy.visit('/remote-pizza');

    cy.window().then((window) => {
      // Reference global instances set in src/browser.js
      const { worker, rest } = window.msw;
      worker.use(
        rest.get('https://httpbin.org/anything', (req, res, ctx) => {
          return res.once(ctx.status(500));
        })
      );
    });

    cy.log('Ingredients list is not visible');
    cy.findByText(ingredients[0]).should('not.be.visible');

    cy.log('Load ingredients');
    cy.findByRole('button', { name: /cook/i }).click();

    cy.log('Ingredients list is still not visible and error message appears');
    cy.findByText(ingredients[0]).should('not.be.visible');
    cy.findByText(/something went wrong/i).should('be.visible');
  });
});
