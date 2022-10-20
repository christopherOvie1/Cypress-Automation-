
//import HomePage_PO from '../../support/page_Object/webdriveruni/HomePage_PO'
import HomePage_PO from '../../support/page_Object/webdriveruni/HomePage_PO'
import ContactUsPage_PO from '../../support/page_Object/webdriveruni/ContactUsPage_PO'
//import HomePage_PO from 'C:\\Users\\covie\\OneDrive - Planit Test Management Solutions Pty Ltd\\Desktop\\Cypress Testing\\cypress\\support\\page_Object\\webdriveruni\\HomePage_PO'
/// <reference types="cypress" />

//import { contains } from "cypress/types/jquery";


describe('test contact us page via webdriveruni',() =>{

  before(function() {
    cy.fixture('example').then(function(data) {
        //this.data = data;
        globalThis.data = data;
    })
})
beforeEach(function () {
  //cy.visit(Cypress.env("webdriveruni_homepage") + "/Contact-Us/contactus.html")
  const homepage_PO = new HomePage_PO();
   homepage_PO.visitHomePage();
 homepage_PO.click_On_ContactUs_Button();
  
  
});


  it.only('should be able to submit a successful via contact us form',()=>{
    cy.title().should("include", "WebDriver | Contact Us");
    cy.url().should("include", "contactus");


//cy.visit('http://www.webdriveruniversity.com/')
//cy.get('#contact-us').invoke('removeAttr','target').click({force:true})

// cy.get('[name="first_name"]').type(data.first_name);
//     cy.get('[name="last_name"]').type(data.last_name);
//    cy.get('[name="email"]').type(data.email)
//    cy.get("#contact_form > textarea[name='message']").type('am going to xx')

// cy.get("#form_buttons >input[type='submit']").click();
// cy.get('div#contact_reply > h1').contains('Thank You for your Message!')

//#contact_form > input[name='email']  div#contact_reply > h1

//cy.webdriveruni_contactForm_Submission(data.first_name,data.last_name,data.email,"am going","div#contact_reply > h1","Thank You for your Message!");

//cy.webdriveruni_contactForm_Submission(Cypress.env("first_name"), data.last_name, data.email, "How can I learn Cypress?", 'h1', 'Thank You for your Message!');
const contactUsPage_PO = new ContactUsPage_PO();
contactUsPage_PO.contactFormSubmission(Cypress.env("first_name"), data.last_name, data.email, "How can I learn Cypress?", 'h1', 'Thank You for your Message!')

  });

  it('should not  be able to submit a successful via contact us form as all fields are required',()=>{

    // cy.visit('http://www.webdriveruniversity.com/')
    // cy.get('#contact-us').invoke('removeAttr','target').click({force:true})
    // cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
    // cy.title().should('include','WebDriver | Contact Us')
    // cy.url().should('contains','Contact-Us')
    //cy.get('#contact-us').click();  //could be      #contact-us> div > div.section-title > h1
    // cy.get('[name="first_name"]').type(data.first_name);
    // cy.get('[name="last_name"]').type(data.last_name);
    // cy.get("#contact_form > textarea[name='message']").type('am going to xx')


    // cy.get("#form_buttons >input[type='submit']").click();
    // cy.get('body').contains('Error: all fields are required')

    //cy.webdriveruni_contactForm_Submission(data.first_name,data.last_name," ","am going","body","Error: all fields are required");
    //cy.webdriveruni_contactForm_Submission(Cypress.env(first_name), data.last_name, " ", "How can I learn Cypress?", 'body', 'Error: Invalid email address');
    const contactUsPage_PO = new ContactUsPage_PO();
    contactUsPage_PO.contactFormSubmission(data.first_name,data.last_name," ","am going","body","Error: all fields are required")

    // cy.webdriveruni_contactForm_Submission(Cypress.env("first_name"), data.last_name, " ","How can I learn Cypress?",
    //   "body",
    //   "Error: Invalid email address"
     
    


  });
})