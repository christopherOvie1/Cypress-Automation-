/// <reference types="cypress" />

//import { contains } from "cypress/types/jquery";

describe('verifying radio buttons via webdriveruni',() =>{

    it('check specific radio buttons',()=>{
        cy.visit('http://www.webdriveruniversity.com/')
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr','target').click({force:true})
//cy.get('#radio-buttons').find("[type='radio']").first().check()
cy.get('#radio-buttons').find("[type='radio']").eq(3).check()
        
    });


    it.only('validate the state of specific radio buttons',()=>{
        cy.visit('http://www.webdriveruniversity.com/')
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr','target').click({force:true})
 // cy.get("[value = 'lettuce']").should('not.be.checked')
  cy.get("[value = 'pumpkin']").should('be.checked')
        
    });
//cabbage
    it('validate the state of next specific radio buttons',()=>{
        cy.visit('http://www.webdriveruniversity.com/')
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr','target').click({force:true})

     
    });
    //radio-buttons

});