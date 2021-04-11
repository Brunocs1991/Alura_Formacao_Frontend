console.log(`Trabalhando com Condicionais`);

const listaDeDestinos = new Array(
    'Salvador',
    'São Paulo',
    'Rio de Janeiro',
);
const idadeComprador = 17;
const estaAcompanhado = true;
console.log(`Destinos possiveis:`);
console.log(listaDeDestinos);
if (idadeComprador >= 18) {
    console.log("Comprador maior de idade");
    listaDeDestinos.splice(1, 1);//removendo item
} else {
    //e menor de idade
    if (estaAcompanhado) {
        console.log("Comprador esta acompanhado");
        listaDeDestinos.splice(1, 1);//removendo item
    } else {
        console.log("Não é maior de idade e não posso vender");
    }
}
console.log(listaDeDestinos);

console.log(idadeComprador > 18);
console.log(idadeComprador < 18);
console.log(idadeComprador <= 18);
console.log(idadeComprador >= 18);
console.log(idadeComprador == 18);
