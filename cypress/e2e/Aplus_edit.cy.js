//<reference types = 'cypress'/>

describe('Aplus Edit Profile', () => {
   
    it('It user should be able to edit profile', () => {
        cy.visit("https://apluseducation.lk/auth/login")
        cy.get("#login-mobile",{timeout:6000}).type('0762504597')
        cy.get("#login-password",{timeout:6000}).type('2507ANJU@spw')
        cy.get("#login-submit",{timeout:6000}).click()
        //edit profile
        cy.get('[data-cy="edit-profile-btn"]',{timeout:6000}).click()
        cy.get('[data-cy="first_name"]',{timeout:6000}).clear()
        cy.get('[data-cy="first_name"]',{timeout:6000}).type('Account')
        cy.get('[data-cy="last_name"]',{timeout:6000}).clear()
        cy.get('[data-cy="last_name"]',{timeout:6000}).type("Test")
        cy.get('[data-cy="school_name"]',{timeout:6000}).clear()
        cy.get('[data-cy="school_name"]',{timeout:6000}).type("Testing School")
        cy.get('[data-cy="exm_year"]',{timeout:6000}).clear()
        cy.get('[data-cy="exm_year"]',{timeout:6000}).type("2026")
        cy.get('[data-cy="district"]',{timeout:6000}).clear()
        cy.get('[data-cy="district"]',{timeout:6000}).type("Colombo")
        cy.get('[data-cy="address"]',{timeout:6000}).clear()
        cy.get('[data-cy="address"]',{timeout:6000}).type("test account,test")
       
        cy.get('[data-cy="profile-save-btn"]',{timeout:6000}).click()


        

    })
})