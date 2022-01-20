/// <reference types="cypress" />

describe('feature sign', () => {

    const user = {}
    user.username = "email@dda.com"
    user.password = "password"


    beforeEach('sign', () => {
        cy.visit('/sign/user')
        
    })

    context('Acessing sign', () => {
        it('fill forms and submit', () => {
            cy.login(user)
        })
    })
})