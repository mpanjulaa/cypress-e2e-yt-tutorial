//<reference types = 'cypress'/>

describe('Ewings login', () => {
   
    it('It user should be able to watch vedio', () => {
        cy.visit("https://ewings.lk/auth/login")
        cy.get('[data-cy="mobile"]',{timeout:4000}).type('0760830538')
        cy.get('[data-cy="password"]',{timeout:4000}).type('20011027R')
        cy.get('[data-cy="login-submit"]',{timeout:4000}).click()
        
        //visit courses
        cy.visit("https://ewings.lk/courses")
        cy.wait(2000)
        cy.get('[data-cy="subject-link"]',{timeout:8000}).first().click()
        cy.wait(2000)
        cy.get('[data-cy="tutor-single"]',{timeout:8000}).first().click()
        cy.wait(2000)
        cy.get('[data-cy="tutor-year-btn"]',{timeout:12000}).eq(3).click()
        cy.wait(2000)
        cy.get('[data-cy="course-card"]',{timeout:12000}).first().click()

    })
})