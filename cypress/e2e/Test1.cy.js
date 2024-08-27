//< reference types = 'cypress'/>

describe('Google Test', () => {
    it('Google Test', () => {
        
     cy.visit("https://www.google.com/")
     cy.get('.gLFyf').type("Automation step by step{enter}")
     cy.get('.LC20lb.MBeuO.DKV0Md').click()

    })
})