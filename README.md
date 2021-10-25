## Tecnologias usadas no projeto;
* Express,
* Knex,
* Postgres,
* Docker

## Tecnologias para serem implementadas em futuras atualizações:
* class-validator;

## Para iniciar o projeto digite os seguintes comandos:
```
$npm i
$docker-compose up -d
```
Instalado todas as dependências com o '$npm i' e o docker com o 'docker-compose up -d',

Utilize o comando:
```
npm start
```

E caso queira já ter alguns usuários já cadastrados, utilize o seguinte comando:
```
 npx knex seed:run
```
---
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
HTTP | ROUTE | BODY | DESCRIÇÃO |
| --- | ------ | ------ |  ------ |
| GET | /api/v1/users |  | Listar todos usuarios
| GET | /api/v1/users/user_id | | Listar único usuário
| POST | /api/v1/users | JSON (email,senha) | Criar único usuário
| PUT | /api/v1/users/user_id | JSON (email,senha) | Alterar único usuário
| DELETE | /api/v1/users | | Deletar todos usuarios
| DELETE | /api/v1/users/user_id | | Deletar único usuário