const quadro = document.querySelectorAll('.pacote-pergunta');

quadro.forEach(function (pacotePergunta){

    pacotePergunta.addEventListener('click', function () {
        
        const pacoteAtivadoAtual = document.querySelector('.ativado');

        pacoteAtivadoAtual.classList.remove('ativado');

        pacotePergunta.classList.add('ativado');       
    })
});
