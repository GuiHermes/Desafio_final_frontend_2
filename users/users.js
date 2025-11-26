//  API
const API_URL = "https://dummyjson.com/users";

const userList = document.getElementById("user-list");
const form = document.getElementById("userForm");

let usuarios = [];

// 
// validaçao de usuarioo
// 
function validarUsuario(user) {
    const textoRegex = /^.{3,50}$/;
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!textoRegex.test(user.nome)) return false;
    if (!textoRegex.test(user.sobrenome)) return false;
    if (!emailRegex.test(user.email)) return false;
    if (user.idade <= 0 || user.idade >= 120) return false;

    if (user.foto && !user.foto.startsWith("http")) return false;

    return true;
}

// 
// carregar usuarrios
// 
async function carregarUsuarios() {
    const resposta = await fetch(API_URL);
    const dados = await resposta.json();

    usuarios = dados.users.map(u => ({
        nome: u.firstName,
        sobrenome: u.lastName,
        email: u.email,
        idade: u.age,
        foto: u.image
    }));

    renderizarUsuarios();
}

// 
// criar cards
// 
function renderizarUsuarios() {
    userList.innerHTML = "";

    usuarios.forEach((user, index) => {
        const li = document.createElement("li");

        li.innerHTML = `
            <div class="user-card">
                <img src="${user.foto || '/assets/img/iconPage.png'}" class="user-photo">
                
                <div class="user-info">
                    <p class="user-name">${user.nome} ${user.sobrenome}</p>
                    <p>Email: ${user.email}</p>
                    <p>Idade: ${user.idade}</p>
                </div>

                <button class="remove-btn" onclick="removerUsuario(${index})">Remover</button>
            </div>
        `;

        userList.appendChild(li);
    });
}

// 
// add usuario
// 
form.addEventListener("submit", function (e) {
    e.preventDefault();

    const novoUser = {
        nome: form.nome.value.trim(),
        sobrenome: form.sobrenome.value.trim(),
        email: form.email.value.trim(),
        idade: Number(form.idade.value),
        foto: form.foto.value.trim()
    };

    if (!validarUsuario(novoUser)) {
        alert("Erro verifique os campos!");
        return;
    }

    usuarios.push(novoUser);
    renderizarUsuarios();

    form.reset();
});

// 
// REMOVER USUÁRIO
// 
function removerUsuario(index) {
    usuarios.splice(index, 1);
    renderizarUsuarios();
}

// chama funcao
carregarUsuarios();
