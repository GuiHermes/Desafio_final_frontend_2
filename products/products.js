// API de produtos
const API_URL = "https://dummyjson.com/products";

// Seletores
const productList = document.getElementById("lista-produto");
const form = document.getElementById("productsForm");


let produtos = [];


// VALIDAÇÃO 

function validarProduto(p) {
    const textoRegex = /^.{3,50}$/;

    if (!textoRegex.test(p.titulo)) return false;
    if (!textoRegex.test(p.descricao)) return false;
    if (!textoRegex.test(p.marca)) return false;
    if (!textoRegex.test(p.categoria)) return false;

    if (p.preco <= 0 || p.preco >= 120) return false;

    if (p.foto && !p.foto.startsWith("http")) return false;

    return true;
}

 
// CARREGAR PRODUTOS DA API
 
async function carregarProdutos() {
    const res = await fetch(API_URL);
    const data = await res.json();

    produtos = data.products.map(prod => ({
        titulo: prod.title,
        descricao: prod.description,
        preco: prod.price,
        marca: prod.brand,
        categoria: prod.category,
        foto: prod.thumbnail
    }));

    renderizarProdutos();
}


// CRIAR O CARD E MOSTRAR

function renderizarProdutos() {
    productList.innerHTML = "";

    produtos.forEach((p, index) => {
        const li = document.createElement("li");

        li.innerHTML = `
            <div class="product-card">
                <img class="product-photo" src="${p.foto}" alt="${p.titulo}">
                
                <div class="product-info">
                    <p class="product-title">${p.titulo}</p>
                    <p>${p.descricao}</p>
                    <p><strong>Marca:</strong> ${p.marca}</p>
                    <p><strong>Categoria:</strong> ${p.categoria}</p>
                    <p><strong>Preço:</strong> R$ ${p.preco}</p>
                </div>

                <button class="remove-btn" onclick="removerProduto(${index})">Remover</button>
            </div>
        `;

        productList.appendChild(li);
    });
}


// ADICIONAR PRODUTO

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const novoProd = {
        titulo: form.titulo.value.trim(),
        descricao: form.descricao.value.trim(),
        preco: Number(form.preco.value),
        marca: form.marca.value.trim(),
        categoria: form.categoria.value.trim(),
        foto: form["foto-produto"].value.trim()
    };

    if (!validarProduto(novoProd)) {
        alert(" Verifique os campos — há valores inválidos.");
        return;
    }

    produtos.push(novoProd);
    renderizarProdutos();

    form.reset();
});


// REMOVER

function removerProduto(index) {
    produtos.splice(index, 1);
    renderizarProdutos();
}


// chama funçao

carregarProdutos();
