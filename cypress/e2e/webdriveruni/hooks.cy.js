/// <reference types="cypress" />

describe('Mocha Hooks', function () {

    before(() => {
        // root-level hook
        cy.log('runs once before all tests')
    })
    after(() => {
        cy.log('runs once all tests are done')
    })


    beforeEach(() => {
        // root-level hook
        cy.log('runs before every test block') 
    })

    afterEach(() => {
        cy.log('runs after each test block')  
    })

   it('example test1',()=>{
       cy.log('example test2')
   })

});