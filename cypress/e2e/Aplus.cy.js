// <reference types = 'cypress'/>

describe('login', () => {
   
    it('It user should be able to log in', () => {

     cy.visit("https://apluseducation.lk/auth/login")
     
     //fill in the form
     cy.get('#login-mobile').type('0762504597')
     cy.get('#login-password').type('2507ANJU@spw')
    
     // login
     cy.get('#login-submit').click()
})
})