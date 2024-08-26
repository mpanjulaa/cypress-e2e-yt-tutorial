const cypress = require('cypress')
const {describe} = require('mocha')

describe('Asserations', () => {
    it('assertions demo', () => {

     cy.visit("https://opensource-demo.orangehrmlive.com/")

      //should snd
     cy.url().should('include','orangehrmlive.com/')
     cy.url().should('eq','https://opensource-demo.orangehrmlive.com/')
     cy.url().should('contain','orangehrm')


    })

    it('explict asserations',() => {

        cy.visit("https://opensource-demo.orangehrmlive.com/")
        cy.get('input[placeholder='username']').type("Admin")
        cy.get('input[placeholder='password']').type("Admin123")
        cy.get('button[type='submit']').click()
    })
})
     