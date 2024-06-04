describe('My First Test', () => {
  it('Visits the website and checks title', () => {
    // Visit a website
    cy.visit('https://mail.google.com/mail/u/0/');

    // Check if the page title contains expected text
    //cy.title().should('include', 'Example Domain');
  });
});
