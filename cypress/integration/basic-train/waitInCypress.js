/// <reference types="cypress" />

describe('Using Wait', () => {
    before('Acessing url', () => {
        cy.visit('http://automationpractice.com/index.php')

    })

    beforeEach('reload', () => {
        cy.reload();
    })

    it('wait element', () => {
        cy.get('h1[class="page-heading"]').should('not.exist');
        cy.get('a[class="login"]').as('buttonLogin').click();
        cy.get('h1[class="page-heading"]').should('exist');
      
    })

    it('Using find and should', () => {
        cy.get('a[class="login"]').as('buttonLogin').click();
        cy.get('div[id="center_column"]').find('h3[class="page-subheading"]').should('have.text', 'Create an accountAlready registered?');

    })

    it('TimeOut', () => {
        cy.get('a[class="login"]').as('buttonLogin').click();
        cy.get('form[id="login_form"] h3[class="page-subheading"]', {timeout: 1000}).should('exist');
        

    })



    it('Wait elments', () => {
        cy.get('ul[class="sf-menu clearfix menu-content sf-js-enabled sf-arrows"] > li  > a[title="Women"]').click();
        cy.wait(1200)
        cy.get('ul[class="product_list grid row"]').find('img').invoke('css','width').then(str => parseInt(str)).should('be.lt', 250);
    })

})