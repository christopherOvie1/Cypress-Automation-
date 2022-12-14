class ContactUsPage_PO{

    contactFormSubmission(firstName,lastName,email,comment,$selector,textToLocate){
        cy.get('[name="first_name"]').type(firstName);
        cy.get('[name="last_name"]').type(lastName);
       cy.get('[name="email"]').type(email)
       cy.get("#contact_form > textarea[name='message']").type(comment)
       cy.get("#form_buttons >input[type='submit']").click();
       cy.get($selector).contains(textToLocate)
    }
   
    }
    export default ContactUsPage_PO;