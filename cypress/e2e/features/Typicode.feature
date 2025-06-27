Feature: Typicode

    Scenario Outline: Consultar post criado - GET
        Given que realizo a consulta dos posts ja criados
        Then valido os dados do post consultado <id> <userId> '<title>' '<body>'

        Examples:
            | id | userId | title                                                                      | body                                                                                                                                                              |
            | 1  | 1      | sunt aut facere repellat provident occaecati excepturi optio reprehenderit | quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto |

    Scenario Outline: Incluir post na lista - POST
        Given que incluo post '<title>' '<body>' '<userId>'
        Then valido o post criado '<expectedTitle>' '<expectedBody>' '<expectedUserId>'

        Examples:
            | title           | body    | userId | expectedTitle   | expectedBody | expectedUserId |
            | Case de sucesso | Outsera | 10     | Case de sucesso | Outsera      | 10             |

    Scenario Outline: Editar post na lista - PUT
        Given que edito um post criado <id> <userId> '<title>' '<body>'
        Then valido o post alterado <id> <userId> '<title>' '<body>'

        Examples:
            | id | userId | title                   | body            |
            | 1  | 1      | Vamos mudar para melhor | So se for agora |

    Scenario Outline: Deletar post da lista - DELETE
        Given que deleto um post existente na lista <id>
        Then valido a exclusao do post da lista

        Examples:
            | id | 
            | 1  |
