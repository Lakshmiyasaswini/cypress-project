import { before,Given,When,Then,And } from "cypress-cucumber-preprocessor/steps";

// Given block in step definition
Given('open browser enter simpleform url',()=>{

    cy.visit('https://v1.training-support.net/selenium/simple-form')
})

//When block in step definition
When('user enters firstname,lastname,email,contact',()=>{

    cy.get('#firstName').type('Lakshmi');

    cy.get('#lastName').type('Yasaswini');

    cy.get('#email').type('yashuraja1708@gmail.com');

    cy.get('#number').type('8317544735');

    cy.xpath('//textarea[@rows="2"]').type('It is a good platform');

})

//And block in step definition
And('user clicks on submit',()=>{

    cy.get('[value="submit"]').click();

})

// Then block in step definition
Then('Successful alert should be displayed with a message',()=>{

    cy.on('window:alert',(alertinfo)=>{

        expect(alertinfo).to.contains(Lakshmi);
    })

})

