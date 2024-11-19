//<reference types = 'cypress'/>

describe('Aplus Video', () => {
   
    it('It user should be vissible free video', () => {
        cy.visit("https://apluseducation.lk/auth/login")
        cy.get("#login-mobile",{timeout:6000}).type('0762504597')
        cy.get("#login-password",{timeout:6000}).type('2507ANJU@spw')
        cy.get("#login-submit",{timeout:6000}).click()
      //visit courses
        cy.visit("https://apluseducation.lk/courses")
        cy.wait(2000)
        cy.get('[data-cy="signin-reminder-close"]',{timeout:8000}).click()
        cy.wait(2000)
        cy.get('[data-cy="subject-link"]',{timeout:8000}).first().click()
        cy.wait(2000)
        cy.get('[data-cy="tutor-single"]',{timeout:8000}).click()
        cy.wait(2000)
        cy.get('[data-cy="tutor-year-btn"]',{timeout:12000}).eq(3).click()
        cy.wait(2000)
        cy.get('[data-cy="course-card"]',{timeout:12000}).first().click()
        cy.get('[data-cy="attend-free-btn"]',{timeout:12000}).first().click()
  })
})