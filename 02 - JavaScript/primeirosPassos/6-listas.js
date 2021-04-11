console.log(`Trabalhando com listas`);
const salvador = `Salvador`;
const saoPaulo = `São Paulo`;
const rioDeJaneiro = `Rio De Janeiro`;

console.log("Destinos possiveis:");
console.log(salvador, saoPaulo, rioDeJaneiro);

const listaDeDestinos = new Array(
    'Salvador',
    'São Paulo',
    'Rio de Janeiro',
);
listaDeDestinos.push('Curitiba'); //Adicionar itens
console.log(listaDeDestinos);

listaDeDestinos.splice(1, 1);  //deletando 1 item apartir do indice 1
console.log(listaDeDestinos[1], listaDeDestinos[0]); //imprimindo item com indice especifico

