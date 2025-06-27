/// <reference types="cypress" />

let resposta;

export class AtividadeRequest {
    
    realizarRequisicao() {
        cy.request({
            method: 'GET',
            url: 'https://fakerestapi.azurewebsites.net/api/v1/Activities',
            failOnStatusCode: false,
        }).then((res) => {
            resposta = res;
        })
    }

    validarAtividades(id, statusAtividade) {
        const statusAtividadeBoolean = statusAtividade.toLowerCase() === 'true';

        expect(resposta.status).to.eq(200)

        resposta.body.some((objetoAtual) => {
            if( objetoAtual.id === id) {
                expect(objetoAtual.id).to.eq(id)
                expect(objetoAtual.completed).to.eq(statusAtividadeBoolean)
                return true
            }
            return false
        })
    }
}