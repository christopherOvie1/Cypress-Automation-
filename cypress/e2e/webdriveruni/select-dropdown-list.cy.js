/// <reference types="cypress" />

//import { contains } from "cypress/types/jquery";

describe('interact with dropdown list via webdriveruni',() =>{

    it('select specific value via select dropdown list',()=>{
        cy.visit('http://www.webdriveruniversity.com/')
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr','target').click({force:true})
//dropdowm-menu-1
cy.get('#dropdowm-menu-1').select('c#')
cy.get('#dropdowm-menu-2').select('testng')
cy.get('#dropdowm-menu-3').select('JavaScript')
        
    })
});
