describe('testing cross origin', () => {
  it('cross origin journey', () => {
    cy.visit('/')
    cy.get('[href="http://elementalselenium.com/"]')
    .should('be.visible').invoke('removeAttr', 'target').click()

    cy.origin('https://elementalselenium.com/', ()=>{
      cy.log('new tab load is successful')
      cy.get('#email').should('be.visible').type('gambbie@yopmail.com')
      cy.get('select').select('JavaScript')
    })
  })
})