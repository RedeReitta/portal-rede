// Seleciona todos os botões com link
document.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", function (e) {
        // Evita a navegação imediata
        e.preventDefault();

        const url = this.href;

        // Adiciona classe de fade-out
        document.body.classList.add("fade-out");

        // Espera a transição e redireciona
        setTimeout(() => {
            window.location.href = url;
        }, 500); // tempo igual ao do transition no CSS
    });
});
