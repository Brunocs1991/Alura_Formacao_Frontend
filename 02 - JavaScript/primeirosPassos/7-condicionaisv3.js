console.log(`Trabalhando com Condicionais`);

const listaDeDestinos = new Array(
    'Salvador',
    'São Paulo',
    'Rio de Janeiro',
);
const idadeComprador = 17;
const estaAcompanhado = false;
const temPassagemComprada = true;
console.log(`Destinos possiveis:`);
console.log(listaDeDestinos);
if (idadeComprador >= 18 || estaAcompanhado == true) {
    console.log("Boa viagem!!");
    listaDeDestinos.splice(2, 1);//removendo item
} else {
    console.log("Não é maior de idade e esta sozinho não posso vender");
}
console.log("Embarque: \n \n ");
if(idadeComprador >= 18 &&  temPassagemComprada){
    console.log("Boa Viagem");
}else{
    console.log("Você não pode embarcar");
}

console.log(listaDeDestinos);