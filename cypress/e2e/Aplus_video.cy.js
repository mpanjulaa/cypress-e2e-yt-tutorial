//<reference types = 'cypress'/>

describe('Aplus Video', () => {
   
    it('It user should be vissible video', () => {
        cy.visit("https://apluseducation.lk/auth/login")
        cy.get("#login-mobile",{timeout:6000}).type('0762504597')
        cy.get("#login-password",{timeout:6000}).type('2507ANJU@spw')
        cy.get("#login-submit",{timeout:6000}).click()
      //visit courses
        cy.visit("https://apluseducation.lk/courses")
        
        cy.get('[data-cy="subject-link"]',{timeout:8000}).first().click()
        cy.get('[data-cy="tutor-single"]',{timeout:8000}).click()
        cy.get('[data-cy="tutor-year-btn"]',{timeout:10000}).eq(3).click()
        cy.get('[data-cy="course-card"]',{timeout:10000}).first().click()
        cy.get('[data-cy="lesson-month-btn"]',{timeout:10000}).eq(8).click()
    })
  })