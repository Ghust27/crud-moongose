![Version](https://img.shields.io/badge/version-1.0.0-blue) ![License](https://img.shields.io/github/license/Ghust27/crud-moongose) ![Issues](https://img.shields.io/github/issues/Ghust27/crud-moongose)

# CRUD Mongoose

Uma aplicação backend para gerenciamento de usuários, construída com Node.js, Express e Mongoose, utilizando MongoDB como banco de dados. Implementa operações CRUD (Create, Read, Update, Delete) com autenticação básica.

---

## Índice

- [Visão Geral](#visão-geral)  
- [Funcionalidades](#funcionalidades)  
- [Tecnologias](#tecnologias)  
- [Pré-requisitos](#pré-requisitos)  
- [Configuração](#configuração)  
- [Como Executar](#como-executar)  
  - [Em Desenvolvimento](#em-desenvolvimento)  
  - [Em Produção](#em-produção)  
- [Estrutura de Pastas](#estrutura-de-pastas)  
- [Endpoints da API](#endpoints-da-api)  
- [Contribuição](#contribuição)  
- [Licença](#licença)  

---

## Visão Geral

O **CRUD Mongoose** é uma API RESTful para gerenciamento de usuários:

- **Autenticação**: Cadastro e login com validação de credenciais.  
- **Gerenciamento de Usuários**: Criação, leitura, atualização e exclusão de registros de usuários.  
- **Banco de Dados**: Integração com MongoDB via Mongoose ORM.  
- **Segurança**: Validação de entrada e tratamento de erros.  

---

## Funcionalidades

- 🔐 Autenticação de usuários com senha criptografada (bcrypt).  
- 📋 Operações CRUD completas para gerenciamento de usuários.  
- 🛡️ Validação de dados de entrada.  
- 🗄️ Integração com MongoDB usando Mongoose.  
- 📊 Respostas JSON padronizadas para endpoints.  

---

## Tecnologias

| Camada     | Tecnologias                                          |
| ---------- | ---------------------------------------------------- |
| **Backend**| Node.js · Express · Mongoose · MongoDB · bcrypt       |

---

## Pré-requisitos

- **Node.js** v14+  
- **npm** ou **yarn**  
- **MongoDB** (instalado localmente ou em um serviço como MongoDB Atlas)  

---

## Configuração

1. Clone este repositório:
   ```bash
   git clone https://github.com/Ghust27/crud-moongose.git
   cd crud-moongose
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Crie o arquivo de variáveis de ambiente na raiz do projeto (.env):
   ```bash
   MONGODB_URI=mongodb://localhost:27017/seu_banco
   PORT=5000
   ```

---

## Como Executar

### Em Desenvolvimento

1. Inicie o servidor em modo de desenvolvimento:
   ```bash
   npm run dev
   ```

2. A API estará disponível em: `http://localhost:5000/api`

### Em Produção

1. Gere o build e inicie o servidor:
   ```bash
   npm run build
   npm start
   ```

A API estará disponível na porta definida no arquivo `.env` (padrão: 5000).

---

## Estrutura de Pastas

```plaintext
├── src
│   ├── controllers    # Lógica de negócio dos endpoints
│   ├── middleware     # Middlewares (autenticação, validação)
│   ├── models         # Modelos do Mongoose (User)
│   ├── routes         # Definição das rotas da API
│   ├── utils          # Funções utilitárias (ex.: conexão com DB)
│   └── app.js         # Configuração do Express
├── .env               # Variáveis de ambiente
├── package.json       # Dependências e scripts
└── README.md          # Documentação do projeto
```

---

## Endpoints da API

| Método | Endpoint                  | Descrição                          | Autenticação |
| ------ | ------------------------- | ---------------------------------- | ------------ |
| POST   | `/api/users/register`     | Cadastra um novo usuário           | Não          |
| POST   | `/api/users/login`        | Faz login do usuário               | Não          |
| GET    | `/api/users`              | Lista todos os usuários            | Sim          |
| GET    | `/api/users/:id`          | Obtém um usuário por ID            | Sim          |
| PUT    | `/api/users/:id`          | Atualiza um usuário                | Sim          |
| DELETE | `/api/users/:id`          | Deleta um usuário                  | Sim          |

---

