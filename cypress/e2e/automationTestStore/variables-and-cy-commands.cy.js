/// <reference types="cypress" />

//const { expect } = require("chai");

describe('verifying cypress commands and jquery commands',() =>{

    
    it('navigating to specific product page',()=>{
  cy.visit('https://automationteststore.com')
        cy.get("a[href*='product/category&path=']").contains("Makeup").click()

        cy.get("a[href*='product/category&path=']").contains("Skincare").click()
   
    });

    it.only('validate properties of contact us page',()=>{
      cy.visit('https://automationteststore.com')
   
            cy.get(".current > a").should(($btn2) => {
             const txt= $btn2.text()
             cy.log(txt)
                
               }) 
        });

    it('navigating to specific product pages',()=>{
      cy.visit('https://automationteststore.com')
            cy.get("a[href*='product/category&path=']").contains("Makeup").click()
            //following code fails
   // const header =   cy.get('h1 .maintext')
     //   cy.log(header.text())

     //use promises
     cy.get('h1 .maintext').then(($headerText)=>{
       const headerText = $headerText.text()
       cy.log("found headet text :"+headerText)
       
            cy.get("a[href*='product/category&path=']").contains("Makeup").click()
       expect(headerText).text().eql('Makeup')

      //  cy.get('button').should(($btn2) => {
      //   expect($btn2.text()).not.to.eq(txt)
      // })

     })   
       
        });

    
   
  })