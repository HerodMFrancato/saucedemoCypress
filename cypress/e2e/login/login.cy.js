/// <reference types="Cypress"/>

describe('Testes Funcional de Login', () => {
    it('Deve realizar o login com sucesso', () => {
        cy.login_teste('standard_user', 'secret_sauce')
        cy.get('.product_label').should('contain', 'Products')
    });

    it('Validando usuario incorreto', () => {
        cy.login_teste('standard_user1', 'secret_sauce')
        cy.get('[data-test="error"]').should('contain', 'Epic sadface: Username and password do not match any user in this service')
    });

    it('Validando senha incorreta', () => {
        cy.login_teste('standard_user', 'secret_sauce1')
        cy.get('[data-test="error"]').should('contain', 'Epic sadface: Username and password do not match any user in this service')
    });
});