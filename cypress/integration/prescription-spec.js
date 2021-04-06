describe('Unstuck Prescription', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://unstuck-rubberduck-api.herokuapp.com/api/v1/rr/rest', {
      body: {
        selection: {
          id: 1,
          type: ['rest'],
          name: "some Oblique R&R",
          content: "Do nothing for as long as possible.",
          resource: 'https://en.wikipedia.org/wiki/Oblique_Strategies',
          contentMedium: 'text',
        }
      }
    })
    cy.visit('http://localhost:3000');
    cy.get('.yes-button').click()
    cy.get('form').find('.name-input').type('cypress')
    cy.get('form').find('.forward-button').as('next').click()
    cy.get('form').find('.problem-type-select').select("big bad bug")
    cy.get('@next').click()
    cy.get('form').find('.tech-type-select').select('everything')
    cy.get('@next').click()
    cy.get('@next').click()
    cy.get('@next').click()
    cy.get('form').find('.days-input').type('1')
    cy.get('form').find('.hours-input').type('1')
    cy.get('@next').click()
    cy.get('form').find('.progress-time-input').select('hours')
    cy.get('@next').click()
    cy.get('form').find('.current-time-input').select('11')
    cy.get('form').find('.break-input').select('yesterday')
    cy.get('form').find('.eat-input').select('minutes')
    cy.get('@next').click()
    cy.get('form').find('.multi')
    cy.get('form').find('.feeling-input').select('1')
    cy.get('form').find('.penult-button').click()
    cy.get('form').find('.submit-button').click().wait(2000)
  });

  it('Have url with prescription type', () => {
    cy.url().should('include','rest')
  })

  it('Should display the prescription', () => {
    cy.get('.prescription-card').find('.title').contains('some Oblique R&R')
    cy.get('.prescription-card').find('.content').contains('Do nothing for as long as possible.')
  })

  it('Should link to prescription resource', () => {
    cy.get('.prescription-card').find('.resource-link').click()
    cy.url().should('include','Oblique_Strategies')
  })

  it('Should be able to start over', () => {
    cy.get('.prescription-card').find('.resource-link').click()
    cy.url().should('include','Oblique_Strategies')
  })

  it('Should be able to start over', () => {
    cy.get('.prescription-card').find('.start-over').click()
    cy.url().should('include','form')
  })
});

describe('Affirmation Prescription', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://www.affirmations.dev', {
      body: {
        affirmation: "you're amazing"
        }
    })
    cy.visit('http://localhost:3000');
    cy.get('.yes-button').click()
    cy.get('form').find('.name-input').type('cypress')
    cy.get('form').find('.forward-button').as('next').click()
    cy.get('form').find('.problem-type-select').select("big bad bug")
    cy.get('@next').click()
    cy.get('form').find('.tech-type-select').select('everything')
    cy.get('@next').click()
    cy.get('@next').click()
    cy.get('@next').click()
    cy.get('form').find('.days-input').type('20')
    cy.get('form').find('.hours-input').type('1')
    cy.get('@next').click()
    cy.get('form').find('.progress-time-input').select('never')
    cy.get('@next').click()
    cy.get('form').find('.current-time-input').select('morning')
    cy.get('form').find('.break-input').select('minutes')
    cy.get('form').find('.eat-input').select('minutes')
    cy.get('@next').click()
    cy.get('form').find('.multi')
    cy.get('form').find('.feeling-input').select('4')
    cy.get('form').find('.penult-button').click()
    cy.get('form').find('.submit-button').click().wait(4000)
  });

  it('Should display the prescription', () => {
    cy.get('.prescription-card').find('.title').contains('a little love')
    cy.get('.prescription-card').find('.content').contains("you're amazing")
  })
});

describe('Advice Prescription', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://api.adviceslip.com/advice', {
      body: {
        slip: {
        advice: "just do it"
        }
      }
    })
    cy.visit('http://localhost:3000');
    cy.get('.yes-button').click()
    cy.get('form').find('.name-input').type('cypress')
    cy.get('form').find('.forward-button').as('next').click()
    cy.get('form').find('.problem-type-select').select("big bad bug")
    cy.get('@next').click()
    cy.get('form').find('.tech-type-select').select('everything')
    cy.get('@next').click()
    cy.get('@next').click()
    cy.get('@next').click()
    cy.get('form').find('.days-input').type('10')
    cy.get('form').find('.hours-input').type('1')
    cy.get('@next').click()
    cy.get('form').find('.progress-time-input').select('never')
    cy.get('@next').click()
    cy.get('form').find('.current-time-input').select('11')
    cy.get('form').find('.break-input').select('yesterday')
    cy.get('form').find('.eat-input').select('minutes')
    cy.get('@next').click()
    cy.get('form').find('.multi')
    cy.get('form').find('.feeling-input').select('4')
    cy.get('form').find('.penult-button').click()
    cy.get('form').find('.submit-button').click().wait(2000)
  });

  it('Should display the prescription', () => {
    cy.get('.prescription-card').find('.title').contains('some general advice')
    cy.get('.prescription-card').find('.content').contains('just do it')
  })
});
