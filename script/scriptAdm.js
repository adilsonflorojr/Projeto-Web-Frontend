function adicionarUsuario() {
  let nomeUsuario = document.getElementById("nome").value;
  let emailUsuario = document.getElementById("email").value;

  if (nomeUsuario === "" || emailUsuario === "") {
    alert("Você precisa preencher todos os campos");
    return;
  }

  let data = new Date();
  let dia = data.getDate();
  let mes = data.getMonth() + 1;
  let ano = data.getFullYear();

  let informacaoUsuario = `${dia}/${mes}/${ano} - ${nomeUsuario} ${emailUsuario}`;
  let itemLista = document.createElement("li");
  let textoItem = document.createTextNode(informacaoUsuario);
  itemLista.appendChild(textoItem);

  let botaoExcluir = document.createElement("button");
  botaoExcluir.innerHTML = "Excluir";
  botaoExcluir.onclick = function () {
    removerUsuario(itemLista, nomeUsuario);
  };
  itemLista.appendChild(botaoExcluir);

  document.getElementById("lista").appendChild(itemLista);

  salvarUsuario(nomeUsuario, emailUsuario);

  document.getElementById("nome").value = "";
  document.getElementById("email").value = "";
}

function limparCampos() {
  document.getElementById("nome").value = "";
  document.getElementById("email").value = "";
}

function salvarUsuario(nome, email) {
  localStorage.setItem(nome, email);
}

function removerUsuario(itemLista, nome) {
  itemLista.parentNode.removeChild(itemLista);
  localStorage.removeItem(nome);
}

function excluirTodosUsuarios() {
  document.getElementById("lista").innerHTML = "";
  localStorage.clear();
}

document.addEventListener("DOMContentLoaded", function () {
  for (let i = 0; i < localStorage.length; i++) {
    let nome = localStorage.key(i);
    let email = localStorage.getItem(nome);

    let data = new Date();
    let dia = data.getDate();
    let mes = data.getMonth() + 1;
    let ano = data.getFullYear();
    let informacaoUsuario = `${dia}/${mes}/${ano} - ${nome} ${email}`;
    let itemLista = document.createElement("li");
    let textoItem = document.createTextNode(informacaoUsuario);
    itemLista.appendChild(textoItem);

    let botaoExcluir = document.createElement("button");
    botaoExcluir.innerHTML = "Excluir";
    botaoExcluir.onclick = function () {
      removerUsuario(itemLista, nome);
    };
    itemLista.appendChild(botaoExcluir);

    document.getElementById("lista").appendChild(itemLista);
  }
});

function pesquisarUsuarios() {
  let consulta = document.getElementById("pesquisar").value.toLowerCase();
  let lista = document.getElementById("lista");
  lista.innerHTML = "";

  for (let i = 0; i < localStorage.length; i++) {
    let nome = localStorage.key(i);
    let email = localStorage.getItem(nome);

    if (nome.toLowerCase().includes(consulta) || email.toLowerCase().includes(consulta)) {
      let data = new Date();
      let dia = data.getDate();
      let mes = data.getMonth() + 1;
      let ano = data.getFullYear();
      let informacaoUsuario = `${dia}/${mes}/${ano} - ${nome} ${email}`;
      let itemLista = document.createElement("li");
      let textoItem = document.createTextNode(informacaoUsuario);
      itemLista.appendChild(textoItem);

      let botaoExcluir = document.createElement("button");
      botaoExcluir.innerHTML = "Excluir";
      botaoExcluir.onclick = function () {
        removerUsuario(itemLista, nome);
      };
      itemLista.appendChild(botaoExcluir);

      lista.appendChild(itemLista);
    }
  }
}