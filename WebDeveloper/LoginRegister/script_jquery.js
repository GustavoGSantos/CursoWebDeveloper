// $(seletor).ação

$(function () {
    var user = document.getElementById("user");
    var password = document.getElementById("password");

    $('#login').click(function () {
        if (user.value == "") {
            $('#user-error')
                .text("O usuário não cadastrado")
                .delay(3000)
                .fadeOut()
                .css("color", "red")
                .css("font", "10px");
        } if (password.value == "") {
            $('#password-error')
                .text("A senha está incorreta")
                .delay(3000)
                .fadeOut()
                .css("color", "red")
                .css("font", "10px");
        }
    });
});