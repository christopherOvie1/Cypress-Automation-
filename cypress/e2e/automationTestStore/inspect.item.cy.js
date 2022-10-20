/// <reference types="cypress" />

describe('inspect automation store using chains of commands',() =>{

    
    it.only('click on first product using click methods',()=>{
  cy.visit('https://automationteststore.com')
  cy.get(".prdocutname").contains('Skinsheen Bronzer Stick').click().then(function(itemHeaderText){
    console.log("selected the following item" +itemHeaderText.text())
  })
  console.log('test123')
    });

    it('click on first product using click index',()=>{
      cy.visit('https://automationteststore.com')
      cy.get(".fixed_wrapper > .fixed >.prdocutname").eq(6).click();
      
     
        });
   
  })