
let setaVoltar = document.getElementById('seta-de-voltar');
let setaAvancar = document.getElementById('seta-de-avancar');
let carrosselImagens = document.querySelectorAll('.slide');

// console.log(setaAvancar)
// console.log(setaVoltar)
// console.log(carrosselImagens)

let slideAtual = 0;


setaAvancar.addEventListener('click', function(){

    const totalDeSlides = carrosselImagens.length;
    console.log(totalDeSlides)

    if(slideAtual === totalDeSlides){
        return;
    }

    slideAtual++;

    carrosselImagens.forEach(slide => {
        slide.classList.remove('aberto')
    });

    carrosselImagens[slideAtual].classList.add('aberto')
    // setaVoltar.style.opacity = '80%'
});

setaVoltar.addEventListener('click', function(){
    

    if(slideAtual === 0){
       console.log('não tem mais como voltar')
       return;
    }

    slideAtual--;

    carrosselImagens.forEach(slide => {
        slide.classList.remove('.aberto')
    });

    carrosselImagens[slideAtual].classList.add('aberto')
    // setaVoltar.style.opacity = '80%'
});

