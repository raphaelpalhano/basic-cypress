


//CALLBACK:
const getSomething = print => {
    setTimeout(() => {
        print('fim.')
    },2000)
};


const sistema = () => {
    console.log('início')
    getSomething(valor => { console.log('meio'), console.log(valor) })
   
};

//sistema();


//PROMISE

const pegarAlgo = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('fim.')
        },2000)
    })
   
};


const sistemaPro = () => {
    console.log('início')
    pegarAlgo().then(algo => {
        console.log(`Metade do caminho ${12}km`)
        console.log(`Você chegou ${algo}`)
    })
   
};

sistemaPro();
