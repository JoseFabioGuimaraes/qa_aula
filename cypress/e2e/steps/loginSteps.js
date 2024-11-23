/// <reference types="cypress" />

import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

Given ('que acesse a pagina de autenticação do saucedemo', () => {
    cy.visit('https://www.saucedemo.com/');
});
When('Quando eu digitar o usuário {string}', (user) => {
    cy.get('[data-test="username"]').type(user);
})
When('a senha {string}', (password) => {
    cy.get('[data-test="password"]').type(password);
})