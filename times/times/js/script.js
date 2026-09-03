function switchTab(evt, tabId, themeClass) {
    // Alterna o conteúdo das abas
    const contents = document.querySelectorAll('.tab-content');
    contents.forEach(content => {
        content.classList.remove('active');
    });

    // Alterna o estado ativo dos botões
    const buttons = document.querySelectorAll('.tab-btn');
    buttons.forEach(button => {
        button.classList.remove('active');
    });

    // Mostra a aba clicada e ativa o botão correspondente
    document.getElementById(tabId).classList.add('active');
    evt.currentTarget.classList.add('active');

    // Altera o tema (fundo) do body de acordo com o time selecionado
    document.body.className = themeClass;
}

