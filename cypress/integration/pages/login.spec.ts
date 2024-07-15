describe('LoginPage', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should display the login form', () => {
    cy.get('input[name=email]').should('be.visible');
    cy.get('input[name=password]').should('be.visible');
    cy.get('button[type=submit]').should('be.visible');
  });

  it('should log in with valid credentials', () => {
    cy.fixture('user.json').then(user => {
      cy.login(user.email, user.password);
      cy.get('.LoginView__logged').should(
        'contain',
        `Bem-vindo: ${user.email}`,
      );
    });
  });

  it('should log out successfully', () => {
    cy.fixture('user.json').then(user => {
      cy.login(user.email, user.password);
      cy.get('.LoginView__logged').should('be.visible');
      cy.get('.LoginView__logged button').click();
      cy.get('input[name=email]').should('be.visible');
      cy.get('input[name=password]').should('be.visible');
    });
  });
});
