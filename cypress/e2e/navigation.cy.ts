describe('Navigation', () => {
  describe('Static pages', () => {
    // should navigate to the about page
    it('should open home page', () => {
      // Start from the index page
      cy.visit('/');

      /*
      // The index page should contain an h1
      cy.findByRole('heading', {
        name: 'Boilerplate code for your Nextjs project',
      });

      // Find a link containing "About" text and click it
      cy.findByRole('link', { name: 'About' }).click();

      // The new url should include "/about"
      cy.url().should('include', '/about');

      // The new page should contain two "lorem ipsum" paragraphs
      cy.findAllByText('Lorem ipsum dolor sit amet', { exact: false }).should('have.length', 2);
      */
    });
  });
});
