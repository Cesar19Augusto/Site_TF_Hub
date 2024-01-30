// script.js
document.addEventListener("DOMContentLoaded", function() {
    const searchForm = document.getElementById("search-form");
    searchForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Evita que o formulário seja enviado

        const searchTerm = document.getElementById("search-input").value.toLowerCase();
        const pages = document.querySelectorAll(".menu-list li a");

        pages.forEach(function(page) {
            const pageTitle = page.textContent.toLowerCase();
            if (pageTitle.includes(searchTerm)) {
                page.style.display = "block"; // Mostra a página se a pesquisa corresponder
            } else {
                page.style.display = "none"; // Oculta a página se a pesquisa não corresponder
            }
        });
    });
});

var imagens = [
    "./imagens_jpeg/TF_BAGEACADEMY.jpeg",
    "./imagens_jpeg/TF_ERP.jpeg",
    "./imagens_png/TF_Shop.png"
  ];
  
  var indiceAtual = 0;
  var intervaloTroca = 7000; // Intervalo de troca em milissegundos (3 segundos)
  
  function trocarImagemAutomaticamente() {
    document.getElementById("imagem").src = imagens[indiceAtual];
    indiceAtual = (indiceAtual + 1) % imagens.length; // Avança para a próxima imagem
  }
  
  // Iniciar a troca automática de imagens
  var intervaloID = setInterval(trocarImagemAutomaticamente, intervaloTroca);
  
  // Se você quiser parar a troca automática após um certo tempo, descomente a linha abaixo
  // setTimeout(function() { clearInterval(intervaloID); }, 15000); // Isso irá parar a troca automática após 15 segundos
  



/*
var imagem1 = "TF_BAGEACADEMY.jpeg"; 
var imagem2 = "TF_ERP.jpeg";
var imagem3 = "TF_Shop.png";

function trocar (){
    document.getElementById("imagem").src = imagem1;
    let aux = imagem1;
    imagem1 = imagem2;
    imagem2 = aux;
}

<button onclick="trocar()">Trocar imagem</button> */