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
