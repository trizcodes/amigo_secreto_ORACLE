let amigos = [];

function adicionarAmigo() {
    const input = document.getElementById("amigo");
    const nome = input.value.trim();

    if (nome === "") {
        alert("Digite um nome válido");
        return;
    }

    if (amigos.includes(nome)) {
        alert("Esse nome já foi adicionado");
        input.value = "";
        return;
    }

    amigos.push(nome); // adiciona no array
    atualizarLista();  // atualiza a lista na tela
    input.value = "";  // limpa o campo
}

function atualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; 

    amigos.forEach((amigo) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Adicione pelo menos 2 amigos para realizar o sorteio");
        return;
    }

    const sorteado = amigos[Math.floor(Math.random() * amigos.length)];

    const resultado = document.getElementById("resultado");
    resultado.innerHTML = "";

    const li = document.createElement("li");
    li.textContent = `O amigo secreto sorteado foi: ${sorteado}`;
    resultado.appendChild(li);
}
