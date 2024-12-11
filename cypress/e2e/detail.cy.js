describe('Detail Page Visual Test', () => {
  it('should match detail page snapshot', () => {
    cy.visit('/detail')
    cy.wait(1000)
    cy.compareSnapshot('detail-page')
  })

  it('should navigate back to home', () => {
    cy.visit('/detail')
    cy.get('a').contains('Back to Home').click()
    cy.url().should('not.include', '/detail')
    cy.wait(1000)
    cy.compareSnapshot('after-navigation')
  })
}) 