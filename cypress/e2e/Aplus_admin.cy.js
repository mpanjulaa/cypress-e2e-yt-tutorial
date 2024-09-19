//<reference types = 'cypress'/>

describe('admin login', () => {
   
    it('It admin should be able to log in', () => {

     cy.visit("https://aplus-admin.web.app/auth/login")
     
     //fill in the form
     cy.get ("#login-email",{timeout:11000}).type('testingone@apluseducation.lk')
     cy.get ("#login-password",{timeout:11000}).type('5342118@axoten')
     //sign in
     cy.get ("#login-submit",{timeout:11000}).click()
     cy.visit("https://aplus-admin.web.app/app/customers",{timeout:18000})
     cy.get ("#search-student",{timeout:19000}).type('762504597')
     cy.get('[data-cy="student-search-submit"]',{timeout:16000}).click()
     cy.get('[data-cy="view-student"]',{timeout:16000}).first().click()
    

})
})