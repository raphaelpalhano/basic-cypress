


//CALLBACK:
const getSomething = print => {
    setTimeout(() => {
        print('meio.')
    },2000)
};


const sistema = () => {
    console.log('início')
    getSomething(valor => { 
        console.log(valor) 
        console.log('fim')
    })
   
};

//sistema();


//PROMISE

const pegarAlgo = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Pessoas lindas')
        },2000)
    })
   
};

() =>{
    pegarAlgo().then(valor =>{
        console.log(valor)
    })
}

const sistemaPro = () => {
    console.log('início')
    pegarAlgo().then(algo => {
        console.log(`Metade do caminho ${12}km`)
        console.log(`Você chegou ${algo}`)
    })
   
};

sistemaPro();
