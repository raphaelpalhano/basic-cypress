/// <reference types="cypress"/>

describe('Lost Ark accessing', () => {
   
    //hook: antes de todos teste:
    before('access website', () => {
        cy.visit('https://www.playlostark.com/en-us');
    })

    //hook: antes de cada teste:
    beforeEach('load website', () => {
        cy.reload();
    })


    it('Title', () => {
        cy.title().should('be.equal', 'Lost Ark - Free to Play MMO Action RPG');
        cy.title().should('contains', 'MMO');

    })

    it('Iterating element', () => {
        cy.xpath('//div[contains(text(), "Become a Founder")]/ancestor::a').click();
        cy.get('h2.ags-ContainerModule-container-heading.ags-ContainerModule-container-heading--lightBackground')
        .invoke('text')
        .then((titulo) => {assert.equal("Founder's Packs", titulo, "titulo equivalente")});
        cy.get('h3').should('contain', 'Forever forge your legend in the epic odyssey of Lost Ark');
    })

    it('Link platinium', () => {
        cy.xpath('//div[contains(text(), "Become a Founder")]/ancestor::a').click();
        cy.get('div[class="ags-ShopModule-contentContainer-actions-actionContainer"] a[data-analytics="platinum-founder-pack-amazon-button"]').click();

    })

    it('Type text', () => {
        cy.get('#campoText').type()
    })



    
})