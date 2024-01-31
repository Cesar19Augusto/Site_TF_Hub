// INICIO Pesquisa 
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
// FIM Pesquisa 

//inicio imagens TF
var imagens = [
    "./imagens_jpeg/TF_BAGEACADEMY.jpeg",
    "./imagens_jpeg/TF_ERP.jpeg",
    "./imagens_png/TF_Shop.png"
];

var indiceAtual = 0;
var intervaloTroca = 9000; // Intervalo de troca em milissegundos (9 segundos)

function trocarImagemAutomaticamente() {
    document.getElementById("imagem").style.backgroundImage = "url('" + imagens[indiceAtual] + "')";
    indiceAtual = (indiceAtual + 1) % imagens.length; // Avança para a próxima imagem
}
// Iniciar a troca automática de imagens
var intervaloID = setInterval(trocarImagemAutomaticamente, intervaloTroca);

// Se você quiser parar a troca automática após um certo tempo, descomente a linha abaixo
// setTimeout(function() { clearInterval(intervaloID); }, 15000); // Isso irá parar a troca automática após 15 segundos

//FIM imagens TF

//INICIO Script para mostrar/ocultar o botão conforme o scroll
  window.onscroll = function() {scrollFunction()};

  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("voltar-ao-topo").style.display = "block";
    } else {
      document.getElementById("voltar-ao-topo").style.display = "none";
    }
  }
  // Função para fazer a rolagem suave
  document.getElementById("voltar-ao-topo").addEventListener("click", function() {
    document.body.scrollTop = 0; // Para navegadores Safari
    document.documentElement.scrollTop = 0; // Para outros navegadores
  });

//FIM Script para mostrar/ocultar o botão conforme o scroll