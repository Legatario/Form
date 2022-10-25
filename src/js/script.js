const form = document.querySelector('form');
const inputName = document.querySelector('#inputName');
const radio = document.getElementsByName('genre');
const span = document.querySelector('#spanName');
const spanGender = document.querySelector('#spanGenre')


console.log(radio)

form.addEventListener('submit', function(e){
    e.preventDefault()
    const val = nameValidation()
    if(val == true){
        console.log(inputName.value)
    }
    genderValidation()
})

function nameValidation(){

    if(inputName.value.length == 0){
       span.innerHTML = 'Preencha o campo';
       return false
    }
    if(inputName.value.length > 4){
        span.innerHTML = '';
        return true
    }else{
        span.innerHTML = 'Preencha com um nome valido';
        return false
    }
}

function radioValidation(){
    for(let i = 0; i < radio.length; i++){
        if(radio[i].checked){
            return radio[i].value
        }
    }
}

function genderValidation(){
    const gender = radioValidation()
    if(gender == undefined){
        spanGender.innerHTML = 'Defina o gênero do Aluno'
        return false;
    }else{
        spanGender.innerHTML = '';
        console.log(gender)
        return true;
    } 
}


