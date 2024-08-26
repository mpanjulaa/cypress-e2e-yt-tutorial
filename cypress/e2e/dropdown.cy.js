///<reference types = 'cypress'/>


describe('handle dropdown', () => {
    it('dropdown with select', () => {

     cy.visit("https://www.zoho.com/commerce/free-demo.html/")
     cy.title().should('eq','OrangeHRM')

    })
})