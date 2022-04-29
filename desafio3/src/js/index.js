const form = document.getElementById('form')
const username = document.getElementById('nome')
const email = document.getElementById('email')
const telefone = document.getElementById('telefone')
const mensagem = document.getElementById('mensagem')



form.addEventListener('submit', (e) =>{
    e.preventDefault()

    checkInputs()
})

//trim é para remover os espaçamentos

function checkInputs(){
    const usernameValue = username.value.trim(); 
    const emailValue = email.value.trim();
    const telefoneValue = telefone.value.trim();
    const mensagemValue = mensagem.value.trim();

    // Verificação do primeiro campo:

    if(usernameValue===''){
        //adiciona a classe erro
        errorValidation(username)
    }else{
        //adiciona a classe de sucesso
        successValidation(username)
    }

    if(emailValue===''){
        errorValidation(email)
    }else{
        successValidation(email)
    }

    if(telefoneValue===''){
        errorValidation(telefone)
    }else{
        successValidation(telefone)
    }

    if(mensagemValue===''){
        errorValidation(mensagem)
    }else{
        successValidation(mensagem)
    }
}

function errorValidation(input, textarea,  message){
    const formControl = input.parentElement
    formControl.className = "form_control erro"

    const textareaControl = textarea.parentElement;

    textareaControl.className = "form_control erro"

    const mensagemErro = formControl.querySelector('mensagem_erro')
    mensagemErro.innertext = message
}         

function successValidation(input){
    const formControl=input.parentElement;

    formControl.className = "form_control sucesso"
}

