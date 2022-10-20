/// <reference types="cypress" />

//import { contains } from "cypress/types/jquery";

describe('handle js alert webdriveruni',() =>{

    it('confirm javascript alert has the correct text',()=>{
        cy.visit('http://www.webdriveruniversity.com/')
        cy.get('#popup-alerts').invoke('removeAttr','target').click({force:true})
        cy.get('#button1').click()
        cy.on('window:alert',(str)=>{
            expect(str).to.equal('I am an alert box!')

        })  
  
    });
    
    it.only('validate javascript confirm alert box works correctly when clicking ok',()=>{
        cy.visit('http://www.webdriveruniversity.com/')
        cy.get('#popup-alerts').invoke('removeAttr','target').click({force:true})
        cy.get('#button4').click()
         
    });


})