//<reference types = 'cypress'/>

describe('admin login', () => {
   
    it('It admin should be able to log in', () => {

     cy.visit("https://aplus-admin.web.app/auth/login")
     
     //fill in the form
     cy.get ("#login-email",{timeout:6000}).type('testingone@apluseducation.lk')
     cy.get ("#login-password",{timeout:6000}).type('5342118@axoten')
     //sign in
     cy.get ("#login-submit",{timeout:6000}).click()
     cy.visit("https://aplus-admin.web.app/app/customers",{timeout:10000})
     cy.get("#search-student",{timeout:9000}).type('762504597')
     cy.get('[data-cy="student-search-submit"]',{timeout:7000}).click()
     cy.get('[data-cy="view-student"]',{timeout:7000}).first().click()
    
     

     
     
})
})