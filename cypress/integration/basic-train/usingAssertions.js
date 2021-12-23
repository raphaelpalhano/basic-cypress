/// <reference types="cypress"/>

import * as url from "../../fixtures/urls.json";


describe('Groups equals', () => {
    before('navigate at automation', () => {
        cy.visit(url['automationPratice']['url']);
    })

    it('Title', () => {
        cy.get('a[title="Women"]').invoke('text').then((text1) => {
            expect('Women', 'Titulo incorreto').equal(text1)
            expect('Women', 'Deve ser Woman').equal(text1)
      });
      
    })
    
    it('Titulo Grande', () => {
        cy.xpath('//input[@placeholder="Search"]').type('Dresses');
        cy.get('button[name="submit_search"]').click();
        cy.get('span.lighter').invoke('text').then((texto) => {
            expect('Dresses').to.be.equal(texto.trim().replace('"', "").replace('"', ""))
            expect('Dresses').not.to.be.equal(texto)
        }) 



    })

    it('Verdadeiro', () => {
        expect(10 > 5).to.be.true;
    })

    it('Falso', () => {
        expect(22 < 20).to.be.false
    })

    it('Condição nula', () => {
       let a = null;
        expect(a).to.be.null
    })

    it('Igualdade de objetos', () => {
        const objeto = {
            nome: "Joao",
            Sobrenome: "Carlos"
        };
        const objeto2 = {
            nome: "Ricardo",
            Sobrenome: "Louis"
        };
        expect(objeto.nome).not.to.be.equal(objeto2.nome);
        expect(objeto).to.have.property('nome');
        expect(objeto).to.not.be.empty;
        expect({}).to.be.empty;

    })

    it('Arrays', () => {
        const array = ["Joaquim", "Jose", "Rafaela", "Joana"];
        expect(array).to.have.members(["Joaquim", "Jose", "Rafaela", "Joana"]);
        expect(array).to.include.members(["Jose"]);
    })

    it('Tipos', () => {
        let semDefinicao;
        const valorInteiro = 10;
        const real = 10.0;
        const valorString = 'Abacate';
        const objeto = {}

        expect(valorInteiro).to.be.a('number');
        expect(real).to.be.a('number');
        expect(semDefinicao).to.be.a('undefined');
        expect(objeto).to.be.a('object');
    })

    it('Strings', () => {
        const texto = 'Uma historia feliz 2334';

        const valor = 2334

        expect(texto).to.contains('Uma');
        
        //regex
        expect(texto).to.match(/historia/)

        // ancora iniciar com:
        expect(texto).to.match(/^Uma/)

        //deve finalizar com:
        expect(texto).match(/2334$/);

        //vão ter elementos de a até z
        expect(texto).match(/[a-z]/)

        //é um texto com 18 caracteres contando com espaços
        expect(texto).match(/.{18}/)

        //word char
        expect(valor).match(/\w+/)

        expect(valor).match(/\d+/)
    })


    it('Number', () => {
        const numInteiro = 44;
        const numReal = 4.21;

        //igual
        expect(numInteiro).to.be.equal(44);

        //acima
        expect(numInteiro).to.be.above(41);

        //abaixo
        expect(numInteiro).to.be.below(555);

    })
})