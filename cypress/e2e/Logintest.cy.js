// < reference types = 'cypress'/>
describe('Login Test', () => {
   
    it('Login Scenario', () => {

     cy.visit("https://opensource-demo.orangehrmlive.com/")
     cy.get("[name='username]").type("admin")
     cy.get("[name='password]").type("admin123")
     cy.get("button[type='submit']").click()
     cy.get('img[alt="client brand banner"]')
     .should('be.visible')
     .log('Login to the application is success')
    })
})