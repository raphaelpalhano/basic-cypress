/// <reference types="cypress"/>

describe('Lost Ark acessing', () => {
    beforeEach('load website', () => {
        cy.visit('https://www.playlostark.com/en-us');
    })
    it('Title', () => {
        cy.title().should('be.equal', 'Lost Ark - Free to Play MMO Action RPG');
        cy.title().should('contains', 'MMO');

    })

    it('Iterating element', () => {
        cy.pause();
        cy.xpath('//div[contains(text(), "Become a Founder")]/ancestor::a').click();
        cy.get('h2.ags-ContainerModule-container-heading.ags-ContainerModule-container-heading--lightBackground')
        .invoke('text')
        .then((titulo) => {assert.equal("Founder's Packs", titulo, "titulo equivalente")});
    })
})