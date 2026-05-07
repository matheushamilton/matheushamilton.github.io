let form = document.getElementById("id_formulario");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    let resultado = document.getElementById("id_resultado");
    resultado.innerHTML = "";


    let nome = document.getElementById("nome_completo").value;


    let ingredientes = [];
    let checkboxes = document.querySelectorAll("input[type='checkbox']");

    for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            ingredientes.push(checkboxes[i].name);
        }
    }


    let radios = document.getElementsByName("radio_tamanho");
    let tamanho = "";

    for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            tamanho = radios[i].nextElementSibling.innerText;
        }
    }


    let massaSelect = document.getElementById("id_tipo_de_massa");
    let massa = massaSelect.options[massaSelect.selectedIndex].text;

    let endereco = document.querySelector("input[name='endereco']").value;


    let mensagem = "Confirme seu pedido:\n\n";
    mensagem += "Nome: " + nome + "\n";
    mensagem += "Ingredientes: " + (ingredientes.length > 0 ? ingredientes.join(", ") : "Nenhum") + "\n";
    mensagem += "Tamanho: " + tamanho + "\n";
    mensagem += "Massa: " + massa + "\n";
    mensagem += "Endereço: " + endereco + "\n\n";
    mensagem += "Clique em OK para confirmar ou Cancelar para voltar.";


    let confirmar = confirm(mensagem);

    if (confirmar) {

        resultado.innerHTML =
            "<div class='resultado-box'>" +
            "<h2>Pedido Confirmado</h2>" +
            "<p><strong>Nome:</strong> " + nome + "</p>" +
            "<p><strong>Ingredientes:</strong> " + (ingredientes.length > 0 ? ingredientes.join(", ") : "Nenhum") + "</p>" +
            "<p><strong>Tamanho:</strong> " + tamanho + "</p>" +
            "<p><strong>Massa:</strong> " + massa + "</p>" +
            "<p><strong>Endereço:</strong> " + endereco + "</p>" +
            "</div>";
    } else {
        alert("Pedido cancelado!");
    }
});