const pacotesPerguntasERespostas = document.querySelectorAll('.pergunta-e-resposta')

selecaoPerguntas.forEach(function(pergunta) =>{
    pergunta.addEventListener('click',function ()=>{

        perguntaAberta.classList.remove('ativo')

        selecaoPerguntas.forEach(function (pergunta){
            pergunta.classList.remove('ativo')
        })

        if(!itemAtivo){
             pergunta.classList.add('ativo)           
        } else {
            pergunta.classList.remove('ativo')
        }
    })

})