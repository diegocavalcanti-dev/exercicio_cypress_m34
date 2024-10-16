/// <reference types='cypress' />

describe("Teste para a home", () => {
    beforeEach(() => {
        cy.visit("https://agenda-contatos-react.vercel.app/");
    });
    // -- TESTE DE INCLUSÃO
    it("Adição das informações de contato", () => {
        cy.get('input[type="text"]').type("Jorge Gustavo");
        cy.get('input[type="email"]').type("gustavojorge@gmail.com");
        cy.get('input[type="tel"]').type("11945889956");
        cy.contains('Adicionar').click()
        cy.screenshot("teste-incluir");
    });


    // -- ADIÇÃO DE MAIS UM CONTATO POIS SE O SITE ESTIVER SEM NENHUM CONTATO CADASTRADO IRÁ DAR ERRO, POR ESSE MOTIVO A ADIÇÃO DE DOIS CONTATOS.
    it("Adição das informações de contato", () => {
        cy.get('input[type="text"]').type("Pedro Paulo");
        cy.get('input[type="email"]').type("pedropaulo@gmail.com");
        cy.get('input[type="tel"]').type("1145889956");
        cy.contains('Adicionar').click()
        cy.screenshot("teste-incluir");
    });

    // -- TESTE DE EDIÇÃO
    it("Alteração das informações de contato da lista", () => {
        cy.get(":nth-child(2) > .sc-gueYoa > .edit").click();
        cy.get('input[type="text"]').clear().type("Jorge Henrique");
        cy.get('input[type="email"]').clear().type("jorge.henrique@gmail.com");
        cy.get('input[type="tel"]').clear().type("219988999911");
        cy.get(".alterar").click();
        cy.screenshot("teste-editar");
    });
    // -- TESTE DE REMOÇÃO
    it("Remoção de um contato da lista", () => {
        cy.get(":nth-child(3) > .sc-gueYoa > .delete").click();
        cy.screenshot("teste-remover");
    });
});