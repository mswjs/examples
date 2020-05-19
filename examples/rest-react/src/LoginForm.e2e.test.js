describe('Login', () => {
  before(() => {
    cy.visit('/')
  })

  describe('given I logged in using existing user', () => {
    before(() => {
      cy.get('#username').type('johnUser{enter}')
    })

    it('should display my first name', () => {
      cy.get('[data-testid="firstname"]').should('have.text', 'John')
    })

    it('should display my username', () => {
      cy.get('[data-testid="username"]').should('have.text', 'johnUser')
    })
  })
})
