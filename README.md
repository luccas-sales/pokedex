# 🧾 Pokédex - Sistema de Gerenciamento de Pokémons

Este projeto é uma **plataforma de gerenciamento de Pokémons (CRUD)** desenvolvida como desafio técnico.

A aplicação permite que **usuários autenticados visualizem, adicionem, editem e excluam Pokémons** de uma base de dados centralizada.

---

# 🚀 Tecnologias Utilizadas

O projeto foi construído utilizando uma stack moderna focada em **performance, escalabilidade e tipagem estática**.

## Frontend

- **Framework:** Next.js (v16) + React (v19)
- **Estilização:** Tailwind CSS (v4)
- **Animações:** GSAP
- **Formulários:** React Hook Form
- **Validação:** Yup
- **Consumo de API:** Axios

## Backend

- **Framework:** NestJS (v11)
- **Runtime:** Node.js
- **Linguagem:** TypeScript
- **ORM:** Prisma
- **Banco de dados:** Supabase
- **Autenticação:** JWT
- **Segurança:** Bcrypt

---

# 📦 Estrutura do Projeto

O projeto está organizado em **monorepo**, dividido em duas aplicações principais.

```
/backend
  API REST construída com NestJS

/frontend
  Interface web construída com Next.js
```

---

# ⚙️ Configuração do Ambiente

Para rodar o projeto localmente, configure as variáveis de ambiente.

## Backend

Crie um arquivo:

```
/backend/.env
```

```env
DATABASE_URL="sua_conexao_postgresql"
DIRECT_URL="sua_conexao_direta_postgresql"
JWT_SECRET="sua_chave_secreta_aqui"
PORT="1507"
CORS_URL="http://localhost:3000"
```

---

## Frontend

Crie um arquivo:

```
/pokedex/.env
```

```env
NEXT_PUBLIC_API_URL="http://localhost:1507"
```

---

# 🛠️ Como Executar o Projeto

## 1️⃣ Clonar o repositório

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio
```

---

## 2️⃣ Rodar o Backend

```bash
cd backend

npm install

npx prisma generate

npm start dev
```

O backend estará rodando em:

```
http://localhost:1507
```

---

## 3️⃣ Rodar o Frontend

```bash
cd frontend

npm install

npm run dev
```

O frontend estará disponível em:

```
http://localhost:3000
```

---

# 📝 Funcionalidades

## 🔐 Autenticação

- Cadastro de novos treinadores
- Login com geração de token JWT
- Proteção de rotas autenticadas

---

## 📊 Dashboard Administrativo

- Total de Pokémons cadastrados
- Nível médio dos Pokémons
- HP médio dos Pokémons

---

## 🐾 CRUD de Pokémons

### Create

Adicionar novos Pokémons contendo:

- Nome
- Tipo
- Nível
- HP
- ID oficial da Pokédex
- Imagem

### Read

Listagem global de Pokémons cadastrados.

### Update

Edição de dados do Pokémon (**restrito ao criador**).

### Delete

Remoção de Pokémons do banco de dados (**restrito ao criador**).

---

## 🔎 Filtros e Busca

Busca em tempo real por:

- Nome
- Tipo
- ID da Pokédex

---

# 🎨 Interface

A interface foi desenvolvida com foco em **responsividade e experiência do usuário**, utilizando:

- **Tailwind CSS** para layout moderno
- **GSAP** para animações e transições fluidas
- Design inspirado no **universo Pokémon**
