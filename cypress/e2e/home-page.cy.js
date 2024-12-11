/// <reference types="cypress" />

describe('Home Page Visual Test', () => {
  it('should match homepage snapshot', () => {
    cy.visit('/')
    cy.wait(1000)
    cy.compareSnapshot('home-page')
  })
})
