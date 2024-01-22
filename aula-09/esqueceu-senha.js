window.onload = function(e) {

var btn1 = document.getElementById("btn1");

var txtEmail = document.getElementById("txtEmail")



}

btn1.onclick = function(e) {
    var email = txtEmail.value;

    if(email == "") {
        exibirMensagemErro("Dgite seu email ");
    }

    else {
        recuperar(email);
    };

    function exibirMensagemErro(mensagem) {

        var spnErro = document.getElementById("spnErro");
        spnErro.innerText = mensagem;
        spnErro.style.display = "block";

        setTimeout(function () {
            spnErro.style.display = "none";
        }, 5000);
    };
    function recuperar(email) {
        alert("Sua senha foi recuperada")
    }
}