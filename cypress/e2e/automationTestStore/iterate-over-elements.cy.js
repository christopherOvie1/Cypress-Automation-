/// <reference types="cypress" />

//const { expect } = require("chai");

describe('iterate over elements', () => {
beforeEach(function(){
    cy.visit('https://automationteststore.com')
    cy.get("a[href*='product/category&path=']").contains("Hair Care").click()
})

    it('log infomation of all hair care product', () => {
        cy.visit('https://automationteststore.com')
        cy.get("a[href*='product/category&path=']").contains("Hair Care").click()

        cy.get('.fixed_wrapper .prdocutname').each(($el, index, $list) => {
            cy.log("index :  "+ index + " "+$el.text())    
        })
 });



    it('add specific product to basket', () => {
        // cy.visit('https://automationteststore.com')
        // cy.get("a[href*='product/category&path=']").contains("Hair Care").click()
  // cy.get('.fixed_wrapper .prdocutname').each(($el, index, $list) => {
        //     if($el.text().includes('Pantene Pro-V Conditioner, Classic Care')){
        //         cy.wrap($el).click()
        //     }
        //       })

        cy.selectProduct('Curls to straight Shampoo');
    });

    it('add another specific product to basket 2', () => {
        // cy.visit('https://automationteststore.com')
        // cy.get("a[href*='product/category&path=']").contains("Hair Care").click()
        cy.selectProduct('Seaweed Conditioner');
    });

    it('add another specific product to basket 3', () => {
        cy.visit('https://automationteststore.com')
        // cy.get("a[href*='product/category&path=']").contains("Hair Care").click()
        // cy.selectProduct('Eau Parfumee au The Vert Shampoo');
    });
})