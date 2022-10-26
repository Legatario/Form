const form = document.querySelector('form');
const inputName = document.querySelector('#inputName');
const radio = document.getElementsByName('genre');
const span = document.querySelector('#spanName');
const spanGender = document.querySelector('#spanGenre');
const docs = document.getElementsByName('docs');
const loader = document.getElementById('loader');
const table = document.getElementById('table');
const list = document.getElementById('list');
const back = document.getElementById('back');

let declarationGender = '';
let docsSing = [];

// console.log(loader)

loader.style.display = 'none';
table.style.display='none';

form.addEventListener('submit', function(e){
    e.preventDefault()
    let conditionName = nameValidation()
    let conditionGender = genderValidation()
    if(conditionName == true && conditionGender == true){
        timeLoader()
        callAsync(conditionName, conditionGender)
    }
})

back.addEventListener('click', function(){
    form.reset();
    list.innerHTML = ''

    form.style.display = 'flex'
    loader.style.display = 'none';
    table.style.display='none';
})

function nameValidation(){

    if(inputName.value.length == 0){
       span.innerHTML = 'Preencha o campo';
       return false
    }
    if(inputName.value.length > 3){
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
        declarationGender = gender
        return true;
    } 
}


function checkValidation(){
    const array = Array.from(docs).map((elem)=>elem)
    const docCheck = array.filter((doc) =>{
        return doc.checked == true
    })
    .map((doc) => doc.value);
    docsSing = docCheck;
}

function textfunction(){
    checkValidation()

    const nameStudant = document.querySelector('#student')
    nameStudant.innerHTML = inputName.value

    const genderStudant = document.querySelector('#studentGender')
    genderStudant.innerHTML = declarationGender

    if(docsSing.length > 0){
        docsSing.forEach((doc)=>{
            let novoItem=document.createElement("li");
            novoItem.textContent= doc;
            list.appendChild(novoItem);
        })
    }else{
        var novoItem=document.createElement("li");
        novoItem.textContent= 'Nenhum';
        list.appendChild(novoItem) 
    }

}

function callAsync(a,b){

    const funcAsync = async(condition)=>{
        if(!condition){
            throw new Error("The condition is false");
        }
        return true;
    }
    
    funcAsync(a && b)
    .then(()=>{
        textfunction();
    })
    .catch((error)=>{
        console.log(error);
    })

}

function timeLoader(){
    form.style.display = 'none'
    loader.style.display = 'flex';
    table.style.display='none';

    setTimeout(function(){
        loader.style.display = 'none',
        table.style.display='flex'
    }, 3000)
}