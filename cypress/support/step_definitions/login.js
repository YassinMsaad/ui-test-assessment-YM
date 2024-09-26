
import { When, Given } from "@badeball/cypress-cucumber-preprocessor";
import '@shelex/cypress-allure-plugin';

const LoginPo = require('../page_objects/Login/loginpo.js');
const loginPage = new LoginPo();
const qs = require("qs");

let employee;
 

Given("navigate to page", () => {
  cy.fixture("employee").then((data) => {
    const { url } = data; // Destructure the URL from the loaded fixture data
    cy.visit(url); // Visit the URL after loading the fixture
  });
});

When('Verify that the user is successfully logged in', function()  {
    // Prefer using meaningful variable names for readability
    cy.fixture("employee").then((data) => {
      const { username,password } = data.login; // Destructure the URL from the loaded fixture data
      
    
    // Use chaining for better readability
    loginPage.usernameInput().type(username);
    loginPage.passwordInput().type(password);

    // Clicking on the submit button doesn't typically require using { force: true }
    loginPage.submitButton().click();});
});


