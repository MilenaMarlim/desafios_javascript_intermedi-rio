
let setaVoltar = document.getElementById('seta-de-voltar');
let setaAvancar = document.getElementById('seta-de-avancar');
let carrosselImagens = document.querySelectorAll('.slide');

let slideAtual = 0;


setaAvancar.addEventListener('click', function () {

    const totalDeSlides = carrosselImagens.length -1;

    if (slideAtual === totalDeSlides) {
        console.log('Ultimo slide')
        setaAvancar.style.opacity = 0.8
        return;
    }  

    slideAtual++;

    carrosselImagens.forEach(slide => {
        slide.classList.remove('aberto')
    });

    carrosselImagens[slideAtual].classList.add('aberto')

});

setaVoltar.addEventListener('click', function () {

    setaAvancar.style.opacity = 1

    if (slideAtual === 0) {
        console.log('não tem mais como voltar')
        setaVoltar.style.opacity = 0.8
        return;
    }

    slideAtual--;

    carrosselImagens.forEach(slide => {
        slide.classList.remove('.aberto')
    });

    carrosselImagens[slideAtual].classList.add('aberto')
});

