//<reference types = 'cypress'/>
describe('watch IMS Vedio', () => {
   
    it('It user should be vissible video', () => {
 
        cy.visit("https://imsedu.lk/auth/login")
        cy.get('[data-cy="login-mobile"]',{timeout:4000}).type('0760830538')
        cy.get('[data-cy="login-password"]',{timeout:4000}).type('20011027R')
        cy.get('[data-cy="login-submit"]',{timeout:4000}).click()
        cy.wait(2000)

        //visit courses
        cy.visit("https://imsedu.lk/courses")
        cy.wait(2000)
        cy.get('[data-cy="subject-link"]',{timeout:4000}).first().click()
        cy.wait(3000)
        cy.get('[data-cy="tutor-single"]',{timeout:4000}).click()
        cy.wait(2000)
        cy.get('[data-cy="tutor-year-btn"]',{timeout:4000}).eq(2).click()
        cy.wait(2000)
        cy.get('[data-cy="course-card"]',{timeout:4000}).first().click()
        cy.wait(2000)
        cy.get('[data-cy="lesson-month-btn"]',{timeout:4000}).eq(6).click()
        cy.wait(2000)
        cy.get('[data-cy="attend-now"]',{timeout:4000}).first().click()
        cy.get('[data-cy="model-attend-now"]',{timeout:4000}).click()
    })
})
