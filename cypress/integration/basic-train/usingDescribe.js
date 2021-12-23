/// <reference types="cypress"/>
import * as cep from '../../fixtures/ceps.json';



describe.only('Buscando cep correios', () => {
    before('Acessar site', () => {
        cy.visit('https://buscacepinter.correios.com.br/app/endereco/index.php')
        
    })
    it('buscando por cep válido', () => {
        cy.xpath('//label[contains(text(),"Digite um CEP ou um Endereço:")]').should('have.text','Digite um CEP ou um Endereço:');
        cy.get('#endereco').type(cep['cep-casa']['values'][0]);
        
    });
}); 


describe('Acessando o site dos correios para buscar por enderecos', () => {
    before('Acessando o correios', () =>{
        cy.visit('https://buscacepinter.correios.com.br/app/endereco/index.php');

    })
    
    describe('Buscando por cep comercial', () => {
        beforeEach('selecionadndo o tipo de cep', () => {
            cy.get('select[name="tipoCEP"]').select('Todos');
        })

        it('Cep promocional de São Paulo', () => {
            cy.get('#endereco').type(cep['cep-comercial']['values'][0]);
            cy.get('button[name="btn_pesquisar"]').click();
            cy.xpath('//tr//td[contains(text(),"Rua Brigadeiro Tobias - até 449/450")]').should('have.text','Rua Brigadeiro Tobias - até 449/450');
            cy.get('#btn_voltar').click();
        })
    });
})