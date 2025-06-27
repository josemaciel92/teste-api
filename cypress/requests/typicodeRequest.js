/// <reference types="cypress" />

let resposta;

export class TypicodeRequest {

    criarPost(title, body, userId) {
        cy.request({
            method: 'POST',
            url: 'https://jsonplaceholder.typicode.com/posts',
            failOnStatusCode: false,
            body: {
                title: title,
                body: body,
                userId: userId
            },
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        }).then((res) => {
            resposta = res
        })
    }

    validarPostCriado(expectedTitle, expectedBody, expectedUserId) {
        expect(resposta.status).to.eq(201)
        expect(resposta.body).to.have.property('id')
        expect(resposta.body.title).to.eq(expectedTitle)
        expect(resposta.body.body).to.eq(expectedBody)
        expect(resposta.body.userId).to.eq(expectedUserId)
    }

    consultarPost() {
        cy.request({
            method: 'GET',
            url: 'https://jsonplaceholder.typicode.com/posts/1',
            failOnStatusCode: false,
        }).then((res) => {
            resposta = res;
        })
    }

    validarDadosConsultaPost(id, userId, title, body) {

        expect(resposta.status).to.eq(200)
        expect(resposta.body.id).to.eq(id)
        expect(resposta.body.userId).to.eq(userId)
        expect(resposta.body.title).to.eq(title)
        expect(resposta.body.body).to.eq(body)
    }

    atualizarPost(id, userId, title, body) {
        cy.request({
            method: 'PUT',
            url: `https://jsonplaceholder.typicode.com/posts/${id}`,
            body: {
                id: id,
                userId: userId,
                title: title,
                body: body
            },
            headers: {
                'Content-Type': 'application/json'
            },
            failOnStatusCode: false,
        }).then((res) => {
            resposta = res;
        })
    }

    validarCamposAtualizados(id, userId, title, body) {
        expect(resposta.status).to.eq(200)

        expect(resposta.body.id).to.eq(id)
        expect(resposta.body.userId).to.eq(userId)
        expect(resposta.body.title).to.eq(title)
        expect(resposta.body.body).to.eq(body)
    }

    deletarPost(id) {
        cy.request({
            method: 'DELETE',
            url: `https://jsonplaceholder.typicode.com/posts/${id}`,
            failOnStatusCode: false,
        }).then((res) => {
            resposta = res;
        })
    }

    validarPostDeletado() {
        expect(resposta.status).to.eq(200);
        expect(resposta.body).to.be.an('object')
        expect(Object.keys(resposta.body)).to.have.length(0)
    }
}