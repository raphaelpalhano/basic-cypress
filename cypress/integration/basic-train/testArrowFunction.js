
//função comum:
function divisao(a, b){
    if (a > b )
        return a / b
    else 
        return b/a
}

// função como variável não terá alteração, colocar em const:
const divisaoConst = function (a, b){
  if (a > b )
        return a / b
 else 
    return b/a
}

//Arrow function: é simplesmente substituir o keyword function pela => arrow

const divisaoArrow = (a, b) => {
    if (a > b )
        return a / b
    else 
        return b/a
}

//arrow sem return:
const divisaoSemReturn = (a,b) => a > b ? a/b : b/a 


//arrow sem parênteses:

const divisorSemParenteses = a => a+a


// sem valor no parâmetro: 

const divisorSemValor = () => 5*5;


let a = 10;
let b = 20;

console.log(divisorSemValor())


//cypress:

describe('teste', () => {
    it('Contextualizando', function () {
        console.log("dasds")
    })
})


// se eu utilizar arrow function ele pega o contexto, já no arrow function não
it('Contextualizando', function () {
    console.log("dasds")
})