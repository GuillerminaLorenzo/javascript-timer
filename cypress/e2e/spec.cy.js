describe('Timer', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('has a title', () => {
    cy.get('title').should('contain', 'Timer');
  })

  it('has a div timer and div controls inside', () => {
    cy.get('div')
      .should('have.class', 'timer')
      .and('have.class', 'controls');
  })

  it('has input duration', () => {
    cy.get('input[id="duration"]').type('number');
  })

  it('has start button working', () => {
    cy.get('button[id="start"]').click()
  })

  it('has pause button working', () => {
    cy.get('button[id="start"]').click()
    cy.wait(1000)
    cy.get('button[id="pause"]').click()
  })
})