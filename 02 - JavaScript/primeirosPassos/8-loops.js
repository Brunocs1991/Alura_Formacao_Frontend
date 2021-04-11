console.log(`\nTrabalhando com Condicionais`);

const listaDeDestinos = new Array(
    'Salvador',
    'São Paulo',
    'Rio de Janeiro',
);
const idadeComprador = 17;
const estaAcompanhado = false;
let temPassagemComprada = false;
const destino = 'São Paulo';
console.log(`\nDestinos possiveis:`);
console.log(listaDeDestinos);
const podeComprar = (idadeComprador >= 18 || estaAcompanhado == true);
let contador = 0;
let destinoExiste = false;

while (contador < listaDeDestinos.length) {
    if (listaDeDestinos[contador] == destino) {
        destinoExiste = true;
        break;
    }
    contador += 1;
}
console.log("Destino existe:", destinoExiste);
if (podeComprar && destinoExiste) {
    console.log("Boa Viagem");
} else {
    console.log("Desculpe tivemos um erro!")
}
for (let i = 0; i < 3; i++) {
    console.log(listaDeDestinos[i])
}