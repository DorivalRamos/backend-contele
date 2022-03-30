Este repósitorio foi criado com a intenção de ser usado como estudo para uma API REST FULL usando Express e knex como ORM

## Tecnologias usadas no projeto;

- Express,
- Knex,
- Postgres,
- Docker Compose
- Migrations
- Seeds
- Insominia para teste de rota
- Dbeaver como Client para Database
- Vscode como editor de texto

## Tecnologias para serem implementadas em futuras atualizações:

- Token JWT
- Password Hash

## Para iniciar o projeto digite os seguintes comandos:

```
$docker-compose up -d
```

## Para olhar as rotas e a documentação no Swaager, cole a seguinte URL no seu navegador

```
http://localhost:3000/api-docs/
```

## No link acima você terá acesso as rotas basicas de uma API REST Full

---

---

## Abaixo você tera por escrito as Premissas para esse repositorio

## TESTE

##### Criar um serviço de API RESTFUL usando nodejs express

- Criar 4 endpoints GET/POST/PUT/DELETE
- Documentação utilizando swagger.
- docker/compose.
- postgres.

### Premissas

- JAVASCRIPT.
- Salvar (email, senha).
- Cada usuário deverá ter um ID único
- Gravar as informações no banco.
- Ter cuidado com validações.
- Knex
- Express
- Postgres

### Documentação

| HTTP   | ROUTE                 | BODY               | DESCRIÇÃO              |
| ------ | --------------------- | ------------------ | ---------------------- |
| GET    | /api/v1/users         |                    | Listar todos usuarios  |
| GET    | /api/v1/users/user_id |                    | Listar único usuário   |
| POST   | /api/v1/users         | JSON (email,senha) | Criar único usuário    |
| PUT    | /api/v1/users/user_id | JSON (email,senha) | Alterar único usuário  |
| DELETE | /api/v1/users         |                    | Deletar todos usuarios |
| DELETE | /api/v1/users/user_id |                    | Deletar único usuário  |
