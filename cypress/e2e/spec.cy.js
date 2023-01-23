describe('Timer', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('has a title', () => {
    cy.get("title").should("contain", "Timer");
  })
})