 🌐 Sistema Web — Usuários e Produtos

Simulação didática de um mini e-commerce utilizando **HTML**, **CSS** e **JavaScript**.

Este projeto implementa um website com três páginas, integração com API pública, formulários validados e operações de adicionar e remover usuários e produtos.

---

## 🚀 Começando

Instruções para rodar o projeto localmente para testes e desenvolvimento.

### 📋 Pré-requisitos

* Navegador moderno (Chrome, Edge, Firefox, etc.)
* Editor de código — **VS Code** recomendado
* Extensão **Live Server** (opcional, mas útil)

### 🔧 Instalação

1.  **Clone o repositório**
    ```bash
    git clone https://github.com/GuiHermes/Desafio_final_frontend_2.git
    ```
2.  **Entre no projeto**
    ```bash
    cd Desafio_final_frontend_2
    ```
3.  **Abra no VS Code**
    ```bash
    code .
    ```
4.  **Execute no navegador**
    * **Com Live Server** → botão direito no `index.html` → `Open with Live Server`
    * **Sem Live Server** → abra o arquivo `index.html` manualmente no seu navegador

---

## 📚 Funcionalidades

### 🏠 Página Inicial — `index.html`

* Apresenta a loja fictícia
* Menu de navegação para Usuários e Produtos

### 👤 Página de Usuários — `users/users.html`

* Carrega usuários da API [DummyJSON](https://dummyjson.com/users)
* Adiciona novos usuários
* Remove usuários da lista
* **Regras de validação:**
    * Nome e Sobrenome: 3–50 caracteres
    * Email: formato válido
    * Idade: número positivo <120
    * Foto: URL opcional válida

### 📦 Página de Produtos — `products/products.html`

* Carrega produtos da API [DummyJSON](https://dummyjson.com/products)
* Adiciona novos produtos
* Remove produtos
* **Regras de validação:**
    * Título, Descrição, Marca, Categoria: 3–50 caracteres
    * Preço: número positivo <120
    * Fotos: URL opcional válida

---

## 🔩 Testes (E2E)

* Abrir página inicial
* Carregar usuários
* Adicionar e remover usuários
* Carregar produtos
* Adicionar e remover produtos
* Testar validações dos formulários

---

## ✨ Estrutura de Pastas

````

project-root/
│
├── assets/
│   ├── css/
│   │   └── styles.css
│   └── img/
│
├── users/
│   ├── users.html
│   └── users.js
│
├── products/
│   ├── products.html
│   └── products.js
│
├── index.html
└── main.js

```

---

## 🛠 Tecnologias

* HTML5
* CSS3
* JavaScript (ES6+)
* Fetch API
* DummyJSON (API pública)

---

## ✒ Autores

* [Guilherme Hermes](https://github.com/GuiHermes)
* [Manuel Victor](https://github.com/mvmce)
* [Hian Oliveira](https://github.com/hian128)
* [Matheus Rodrigues](https://github.com/Matheus-Rod03)
```
