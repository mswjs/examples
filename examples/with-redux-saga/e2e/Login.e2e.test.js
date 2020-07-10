describe('Login', () => {
  before(() => {
    cy.visit('/')
  })

  describe('given I logged in using existing user', () => {
    before(() => {
      cy.get('#username').type('johnUser{enter}')
    })

    it('should display my user ID', () => {
      cy.get('[data-testid="userId"').should(
        'have.text',
        'f79e82e8-c34a-4dc7-a49e-9fadc0979fda'
      )
    })

    it('should display my first name', () => {
      cy.get('[data-testid="firstName"]').should('have.text', 'John')
    })

    it('should display my username', () => {
      cy.get('[data-testid="lastName"]').should('have.text', 'Maverick')
    })
  })
})
