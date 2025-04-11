/// <reference types="Cypress"/>

describe('Realizando compra no site com sucesso', () => {
    it('Deve realizar o login com sucesso', () => {
        cy.visit("https://www.saucedemo.com/v1/")
        cy.get('[data-test="username"]').type("standard_user")
        cy.get('[data-test="password"]').type("secret_sauce")
        cy.get('#login-button').click()
        cy.get('.product_label').should('contain', 'Products')
        cy.get('.product_sort_container').select('Price (low to high)')
        cy.get('#item_2_title_link > .inventory_item_name').should('contain', 'Sauce Labs Onesie')
        cy.get(':nth-child(1) > .pricebar > .btn_primary').click()
        cy.get('#item_0_title_link > .inventory_item_name').should('contain', 'Sauce Labs Bike Light')
        cy.get(':nth-child(2) > .pricebar > .btn_primary').click()
        cy.get('svg[data-icon="shopping-cart"]').parent().click()
        cy.get('.btn_action').click()
        cy.get('[data-test="firstName"]').type("Test")
        cy.get('[data-test="lastName"]').type("Test")
        cy.get('[data-test="postalCode"]').type("10101010")
        cy.get('.btn_primary').click()
        cy.get('.btn_action').click()
        cy.get('.complete-header').should('contain', 'THANK YOU FOR YOUR ORDER')
    });
});