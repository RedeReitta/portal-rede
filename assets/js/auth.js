const form = document.getElementById('loginForm');
  const mensagem = document.getElementById('mensagem');

  form.addEventListener('submit', function (e) {
    e.preventDefault(); // Impede o envio padrão do formulário

    const usuario = document.getElementById('usuario').value;
    const senha = document.getElementById('senha').value;

    if (usuario === 'admin' && senha === '123456') {
      mensagem.style.color = 'green';
      mensagem.textContent = 'Log in realizado com sucesso!';
      // Aqui você pode redirecionar para outra página simulando:
      setTimeout(() => {
        window.location.href = './portal.html'; // ou dashboard.html
      }, 1000);
    } else {
      mensagem.style.color = 'red';
      mensagem.textContent = 'Usuário ou senha incorretos.';
    }
  });

  const btn = document.getElementById('btn');



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

  
  
  