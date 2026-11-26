const formulario = document.getElementById("form-contato");

formulario.addEventListener("submit", function(evento) {

    evento.preventDefault();

    const nome = document.getElementById("nome").value;

    const email = document.getElementById("email").value;

    const servico = document.getElementById("servico").value;

    const mensagem = document.getElementById("mensagem").value;

    const telefone = "5511970328008";

    const texto = `Olá! Gostaria de solicitar um orçamento.

Nome: ${nome}
E-mail: ${email}
Serviço: ${servico}
Mensagem: ${mensagem}`;

    const url = `https://wa.me/${telefone}?text=${encodeURIComponent(texto)}`;

    window.open(url, "_blank");

});