/// <reference types="cypress" />

//import { contains } from "cypress/types/jquery";

describe('validate webdriveruni homepge link',() =>{

    it('confirm link redirect to correct page',()=>{
        cy.visit('http://www.webdriveruniversity.com/')
        cy.get('#contact-us').invoke('removeAttr','target').click({force:true})
        cy.url().should('include','contactus')
        cy.go('back')
        cy.reload(true)
 cy.go('forward')
 cy.url().should('include','contactus')

 cy.go('back')
 cy.get('#login-portal').invoke('removeAttr','target').click({force:true})
  

 //login-portal
    });

})