/// <reference types="Cypress"/>

describe('Testes Funcional de Login', () => {
    it('Deve realizar o login com sucesso', () => {
        cy.visit("https://www.saucedemo.com/v1/")
        cy.get('[data-test="username"]').type("standard_user")
        cy.get('[data-test="password"]').type("secret_sauce")
        cy.get('#login-button').click()
        cy.get('.product_label').should('contain', 'Products')
    });

    it('Validando login incorreto', () => {
        cy.visit("https://www.saucedemo.com/v1/")
        cy.get('[data-test="username"]').type("standard")
        cy.get('[data-test="password"]').type("secret_sauce")
        cy.get('#login-button').click()
        cy.get('[data-test="error"]').should('contain', 'Epic sadface: Username and password do not match any user in this service')
    });

    it('Validando senha incorreta', () => {
        cy.visit("https://www.saucedemo.com/v1/")
        cy.get('[data-test="username"]').type("standard_user")
        cy.get('[data-test="password"]').type("secret")
        cy.get('#login-button').click()
        cy.get('[data-test="error"]').should('contain', 'Epic sadface: Username and password do not match any user in this service')
    });

    it('Adicionar produto no carrinho', () => {
        cy.visit("https://www.saucedemo.com/v1/")
        cy.get('[data-test="username"]').type("standard_user")
        cy.get('[data-test="password"]').type("secret_sauce")
        cy.get('#login-button').click()
        cy.get(':nth-child(1) > .pricebar > .btn_primary').click()
    });
});