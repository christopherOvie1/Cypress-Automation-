/// <reference types="cypress" />

//const { expect } = require("chai");

describe('add multople items to basket', () => {

    before(function () {
        cy.fixture("product").then(function (data) {
          globalThis.data = data;
        });
      });
    
    beforeEach(function () {
        cy.visit('https://automationteststore.com')
        cy.get("a[href*='product/category&path=']").contains("Hair Care").click()
    })

    
  it("Add specific items to basket", () => {
    globalThis.data.productName.forEach(function(element) {
        cy.addProductToBasket(element)

        })
    });

        
    });




