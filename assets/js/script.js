function output() {
    const confirmacao = confirm("Deseja realmente sair?");
    if (confirmacao) {
      alert("Você saiu do portal.");
      window.location.href = "./index.html"; // Redireciona para a página de login
    }
  }
  