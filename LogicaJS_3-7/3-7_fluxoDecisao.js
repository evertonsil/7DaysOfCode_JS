//validando opção da área de programação
const slcArea = document.getElementById('slcArea');

slcArea.addEventListener('change', function handleChange(event) { 
  switch (event.target.value){
    case 'front':
        document.getElementById('optFrontEnd').style.display='block';
        document.getElementById('optBackEnd').style.display='none';
        document.getElementById('optIsFullstack').style.display='none';
    break;   
    case 'back':
        document.getElementById('optBackEnd').style.display='block';
        document.getElementById('optFrontEnd').style.display='none';
        document.getElementById('optIsFullstack').style.display='none';
    break;
  }
});

//validando select front/back end
const slcFrontBack = document.getElementById('slcFrontEnd');
const slcBackEnd = document.getElementById('slcBackEnd');

//exibe select continuar estudando/fullstack se selecionar FrontEnd
slcFrontBack.addEventListener('change', function handleChange(event) { 
    if (event.target.value != 0 ){
        document.getElementById('optIsFullstack').style.display='block';
    }      
});

//exibe select continuar estudando/fullstack se selecionar BackEnd
slcBackEnd.addEventListener('change', function handleChange(event) {
    if (event.target.value != 0 ){
        document.getElementById('optIsFullstack').style.display='block';
    }
});

//exibe prompt após o último select
const slcisFullStack = document.getElementById('slcisFullStack');

slcisFullStack.addEventListener('change', function handleChange(event) {
    let msg = prompt("Que legal :). Digite quais outras tecnologia tem vontade de aprender. Quando terminar apenas digite 0! ");
    while (msg != 0 ){
        novaTecnologia = prompt("Qual?");
        alert(`Perfeito! Já adicione ${novaTecnologia} na sua lista de estudos ;)`)
        msg = prompt("Que legal :). Digite quais outras tecnologia tem vontade de aprender. Quando terminar apenas digite 0!");
    }
});

