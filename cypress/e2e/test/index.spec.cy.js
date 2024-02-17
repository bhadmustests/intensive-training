describe('template spec', () => {
  it('passes', () => {
    cy.visit('/')
    cy.get('[href="http://elementalselenium.com/"]')
    .should('be.visible').invoke('removeAttr', 'target').click()
    cy.get('#email').should('be.visible').type('gambbie@yopmail.com')
    cy.get('select').select('JavaScript')

    // cy.origin('http://elementalselenium.com/', ()=>{
    //   cy.log('new tab load is successful')
    // })
  })
})