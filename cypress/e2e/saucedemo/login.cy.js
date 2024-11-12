/// <reference types="cypress" />

context('Testes da tela de Login', () => {

    it('Login válido', () => {
        cy.visit('https://www.saucedemo.com/');
        cy.get('[data-test="username"]').type('standard_user');
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('[data-test="login-button"]').click();
        cy.get('[data-test="title"]').should('have.text','Products')
                    // ou
        //cy.get('[data-test="title"]').should('contain','Product')

        
    });
    
});
