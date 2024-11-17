
// pegando classe button e atribuindo a uma variável  BUTTON
var button = document.getElementsByClassName("btn")
//Fazendo uma condição para percorrer todos os BUTTON
for (var i = 0; i < button.length; i++){
    //Função para pegar o botão selcionado e adicionar um evento de click
    button[i].addEventListener("click", function(){
        //Evento de click vai direcionar para uma aba fora da página
        var url = "https://wa.me/5551981127264?text=Ol%C3%A1%2C%20gostaria%20de%20ser%20atendido(a)"
        window.open(url, "_blank")
    })
}

