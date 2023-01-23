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

  it('has a circle', () => {
    cy.get('svg').within(() => {
      cy.get("circle").then(circle => {
        cy.log("X-coordinate : "+circle.attr("cx"));
        cy.log("Y-coordinate : "+circle.attr("cy"));
        cy.log("Radius : "+circle.attr("r"));
        cy.log("Stroke : "+circle.attr("stroke"));
        cy.log("Stroke Width : "+circle.attr("stroke-width"));
        cy.log("Fill Color : "+circle.attr("fill"));
      });
    })
  })
})