/// <reference types="cypress" />

//import { contains } from "cypress/types/jquery";

describe('test mouse actions',() =>{

    it('scroll elements into view',()=>{
        cy.visit('http://www.webdriveruniversity.com/')
        cy.get('#actions').scrollIntoView().invoke('removeAttr','target').click({force:true})

        
    });
});