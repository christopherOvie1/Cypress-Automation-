/// <reference types="cypress" />

describe('test contact us page via webdriveruni', () => {
  before(function(){
    cy.fixture("userDetails").as("user")
  })

  //var name = 'abel'
  //var email = 'testabc@gmail.com'
  it('should be able to submit a successful via contact us form', () => {
    cy.visit('https://automationteststore.com')
    //cy.get("a[href$='contact']").click()

   // cy.xpath("//a[contains(@href,'contact')]").click();


    cy.get("a[href$='contact']").click().then(function (linkText) {
      cy.log('clicked on link using text :' + linkText.text())
    })
    cy.get("@user").then((user)=>{
      cy.get("#ContactUsFrm_first_name").type(user.first_name)
      cy.get("#ContactUsFrm_email").type(user.email)
    })
   

    cy.get("#ContactUsFrm_enquiry").type('am going to xx')
    cy.get("button[title='Submit']").click();
    cy.xpath("//section[@class='mb40']/p[.='Your enquiry has been successfully sent to the store owner!']").should('have.text', 'Your enquiry has been successfully sent to the store owner!');
    
    cy.log("test has completed")
   });

})