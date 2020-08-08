import '@testing-library/cypress/add-commands';

describe('Login', () => {
  before(() => {
    cy.visit('/');
  });

  describe('given I logged in using existing user', () => {
    before(() => {
      cy.findByRole('textbox', { name: /username:/i }).type('johnUser{enter}');
    });

    it('should display my user ID', () => {
      cy.findByText('f79e82e8-c34a-4dc7-a49e-9fadc0979fda');
    });

    it('should display my first name', () => {
      cy.findByText('John');
    });

    it('should display my username', () => {
      cy.findByText('Maverick');
    });
  });
});
