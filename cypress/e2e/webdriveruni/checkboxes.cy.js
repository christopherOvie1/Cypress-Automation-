/// <reference types="cypress" />

//import { contains } from "cypress/types/jquery";

describe('verifying checkboxes via webdriveruni',() =>{

    it('check and validate checkboxes',()=>{
        cy.visit('/')
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr','target').click({force:true})
//cy.get("input[value='option-1']").check()
//cy.get("input[value='option-1']").check().should('be.checked')
cy.get("input[value='option-1']").as('option-1')
cy.get('@option-1').check()
cy.get('@option-1').check().should('be.checked')
        
    });

});