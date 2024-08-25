

describe('My First Test', () => {
    it('Verify title-possitive', () => {

     cy.visit("https://opensource-demo.orangehrmlive.com/")
     cy.title().should('eq','OrangeHRM')

    })

    it('Verify title-negative test', () => {

        cy.visit("https://opensource-demo.orangehrmlive.com/")
        cy.title().should('eq','OrangeHRM123')
   
       })
    })