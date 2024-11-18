//<reference types = 'cypress'/>

describe('admin login', () => {
   
    it('It admin should be able to log in', () => {

     cy.visit("https://aplus-admin.web.app/auth/login")
     
     //fill in the form
     cy.get ("#login-email",{timeout:11000}).type('testingone@apluseducation.lk')
     cy.get ("#login-password",{timeout:11000}).type('5342118@axoten')
     //sign in
     cy.get ("#login-submit",{timeout:11000}).click()
     cy.wait(2000)
     cy.visit("https://aplus-admin.web.app/app/customers",{timeout:19000})
     cy.get ("#search-student",{timeout:20000}).type('762504597')
     cy.wait(3000)
     cy.get('[data-cy="student-search-submit"]',{timeout:18000}).click()
     cy.wait(2000)
     cy.get('[data-cy="view-student"]',{timeout:18000}).first().click()
    

})
})