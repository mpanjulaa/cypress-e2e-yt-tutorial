//<reference types = 'cypress'/>

describe('admin login', () => {
   
    it('It admin should be able to log in', () => {

     cy.visit("https://aplus-admin.web.app/auth/login")
     
     //fill in the form
     cy.get ("#login-email",{timeout:5000}).type('testingone@apluseducation.lk')
     cy.get ("#login-password",{timeout:5000}).type('5342118@axoten')
     //sign in
     cy.get ("#login-submit",{timeout:5000}).click()
     cy.visit("https://aplus-admin.web.app/app/customers")
     cy.get("#search-student",{timeout:5000}).type('762504597')
     cy.get("#student-search-submit",{timeout:5000}).click()
     
})
})