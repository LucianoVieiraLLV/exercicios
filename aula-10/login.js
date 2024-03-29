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

        var data = JSON.stringify({
            "email": "paulistano.luciano@icloud.com",
            "senha": "teste123"
        });

        var xhr = new XMLHttpRequest();
        xhr.withCredentials = true;

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                var LoginResult = JSON.parse(this.responseText);
                if (LoginResult.sucesso) {
                    alert("logou!");
            }
            else {
                exibirMensagemErro(LoginResult.mensagem);
            }
            }
        });

        xhr.open("POST", "https://localhost:44380/api/usuario/login");
        xhr.setRequestHeader("Content-Type", "application/json");

        xhr.send(data);
    }

}