import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

import { TypicodeRequest } from "../../requests/typicodeRequest";

const oTypicodeRequest = new TypicodeRequest();

Given("que incluo post {string} {string} {string}", (title, body, userId) => {
    oTypicodeRequest.criarPost(title, body, userId)
})

Then("valido o post criado {string} {string} {string}", (expectedTitle, expectedBody, expectedUserId) => {
    oTypicodeRequest.validarPostCriado(expectedTitle, expectedBody, expectedUserId)
})

Then("que realizo a consulta dos posts ja criados", () => {
    oTypicodeRequest.consultarPost()
})

Then("valido os dados do post consultado {int} {int} {string} {string}", (id, userId, title, body) => {
    oTypicodeRequest.validarDadosConsultaPost(id, userId, title, body)
})

Then("que edito um post criado {int} {int} {string} {string}", (id, userId, title, body) => {
    oTypicodeRequest.atualizarPost(id, userId, title, body)
})

Then("valido o post alterado {int} {int} {string} {string}", (id, userId, title, body) => {
    oTypicodeRequest.validarCamposAtualizados(id, userId, title, body)
})

Then("que deleto um post existente na lista {int}", (id) => {
    oTypicodeRequest.deletarPost(id)
})

Then("valido a exclusao do post da lista", () => {
    oTypicodeRequest.validarPostDeletado()
})