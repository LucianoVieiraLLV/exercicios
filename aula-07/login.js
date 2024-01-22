window.onload = function (e) {

    var btn1 = document.getElementById("btn1");

    var txtEmail = document.getElementById("txtEmail");

    var txtSenha = document.getElementById("txtSenha");

    txtEmail.focus();

    btn1.onclick = function (e) {

        e.preventDefault();

        var email = txtEmail.value;
        var senha = txtSenha.value;

        if (email == "") {
            exibirMensagemErro("Campo de Email obrigatorio");
        }

        else if (senha == "") {
            exibirMensagemErro("Campo de Senha obrigatorio");
        }
        else {
            realizarLogin(email, senha);
        }
    };

    function exibirMensagemErro(mensagem) {

        var spnErro = document.getElementById("spnErro");
        spnErro.innerText = mensagem;
        spnErro.style.display = "block";

        setTimeout(function () {
            spnErro.style.display = "none";
        }, 5000);
    }
    function realizarLogin(email, senha) {

        alert("O login foi realizado para o usuário " + email);
    }

}