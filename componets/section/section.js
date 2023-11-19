function trocarTexto() {
  var cartoes = document.querySelectorAll("#section .card");
  var indiceAtual = 0;

  function trocarTextoCartao(cartao, isVisible) {
    var textOcuto = cartao.querySelector(".text-ocuto");
    var cardText = cartao.querySelector(".card-text");
    var cardImg = cartao.querySelector("img");

    if (isVisible) {
      textOcuto.style.display = "none";
      textOcuto.style.flexFlow = "column";
      cardText.style.display = "flex";
      cardText.style.flexFlow = "column";
      cardImg.style.display = "";
      cartao.style.background = "";
      cartao.style.color = "";
    } else {
      textOcuto.style.display = "flex";
      textOcuto.style.flexFlow = "column";
      cardText.style.display = "none";
      cardImg.style.display = "none";
      cartao.style.background = "#FF2978";
      cartao.style.color = "white";
    }
  }

  // Exemplo de uso
  var exemploCartao = document.querySelector("#section .card");
  trocarTextoCartao(exemploCartao, true); // Troca para o estado original

  function trocarTextoProximoCartao() {
    // Volta ao texto original antes de passar para o próximo cartão
    trocarTextoCartao(cartoes[indiceAtual], true);

    // Incrementa o índice ou reinicia se atingir o final
    indiceAtual = (indiceAtual + 1) % cartoes.length;

    // Chama a função novamente para passar para o próximo cartão após 3 segundos
    setTimeout(function () {
      // Troca para o texto oculto e estiliza
      trocarTextoCartao(cartoes[indiceAtual], false);

      // Chama a função novamente para passar para o próximo cartão após 3 segundos
      setTimeout(trocarTextoProximoCartao, 3000);
    }, 3000);
  }

  trocarTextoProximoCartao();
}

trocarTexto();
