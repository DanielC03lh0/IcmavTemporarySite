// Carregar a navbar
fetch('/assets/components/navbar/navbar.html')
    .then(response => response.text())
    .then(data => {
        // Inserir o conteúdo da navbar dentro do container
        document.getElementById('navbar-container').innerHTML = data;

        // Carregar o script da navbar após o HTML ser carregado
        const script = document.createElement('script');
        script.src = '/assets/components/navbar/navbar.js';  // Caminho para o script
        document.body.appendChild(script);  // Adiciona o script ao final do body
    });

// Carregar o footer
fetch('/assets/components/footer/footer.html')
.then(response => response.text())
.then(data => {
    document.getElementById('footer-container').innerHTML = data;
});