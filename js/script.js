var formulario = document.getElementById("form-cadastro");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();
    
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;

    console.log("Nome: " + nome + ", Email: " + email);

})


