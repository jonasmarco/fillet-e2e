Cypress.Commands.add('login', (email: string, password: string) => {
  cy.visit('/');
  cy.get('input[name=email]').type(email);
  cy.get('input[name=password]').type(password);
  cy.get('button[type=submit]').click();
});
