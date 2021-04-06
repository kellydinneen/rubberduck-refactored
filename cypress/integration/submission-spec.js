describe('Submission', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
    cy.get('header').find('.submissions-button').click()
    cy.intercept('POST', 'https://unstuck-rubberduck-api.herokuapp.com/api/v1/submissions', {
      statusCode: 200,
      body: {
        "name": "strategy",
        "content": "test strategy",
        "resource": "link"
      }
    })
  })
  it('Have correct url', () => {
    cy.url().should('include','submit')
  })
  it('Show the duck', () => {
    cy.get('svg').should('have.class', 'duck')
  })
  it('Should be able to submit strategy', () => {
    cy.get('section').find('.title-input').type('strategy')
    cy.get('section').find('.desc-input').type('test strategy')
    cy.get('section').find('.link-input').type('link')
    cy.get('section').get('.pres-button').click()
  })
});
