// $(seletor).ação

$(function () {
    var user = document.getElementById("user");
    var password = document.getElementById("password");

    $('#login').click(function () {
        if (user.value == "") {
            $('#user-error')
                .text("O usuário inserido não está cadastrado")
                .delay(3000)
                .fadeOut()
                .css("color", "red")
                .css("border", "1px solid")
                .css("font", "10px");
        } if (password.value == "") {
            $('#password-error')
                .text("A senha está incorreta")
                .delay(3000)
                .fadeOut();
        }
    });
});