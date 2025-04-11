/// <reference types="Cypress"/>

describe('Realizando compra no site com sucesso', () => {
    it('Deve realizar o login com sucesso', () => {
        cy.visit("https://www.saucedemo.com/v1/")
        cy.get('[data-test="username"]').type("standard_user")
        cy.get('[data-test="password"]').type("secret_sauce")
        cy.get('#login-button').click()
        cy.get('.product_label').should('contain', 'Products')
    });
    it('Deve adicionar produto no carrinho e finalizar compra', () => {
        cy.visit("https://www.saucedemo.com/v1/")
        cy.get('[data-test="username"]').type("standard_user")
        cy.get('[data-test="password"]').type("secret_sauce")
        cy.get('#login-button').click()
        cy.get(':nth-child(1) > .pricebar > .btn_primary').click()
    });
});