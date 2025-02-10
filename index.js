//jogo- Picachu Nordestino
console.log("digite o nome do seu jogador")
let jogador_1 = {nome:"cambito", XP:20};

let jogador_2 = {nome: "tai endoidando", XP: 30};

let jogador_3 = {nome: "ai dento", XP:15};

let jogador_4 = {nome: "buliçoso", XP: 25};

function avaliarJogador(jogador) {
if (jogador.XP <= 20) { 
    return "é fuleiro";
}
else if ( jogador.XP > 20 && jogador.XP < 30 ) {
    return " nem fede, nem cheira";
}
else {
    return " é arretado de bom";
}
}
for (let XP = 0; XP < 5; XP++) {
    console.log(i);
}

console.log("Bem-vindo(a) ${jogador_1.nome}, você tem ${jogador_1.XP} XP. ${avaliarjogador(jogador_1)}");
console.log("Bem-vindo(a) ${jogador_2.nome}, você tem ${jogador_2.XP} XP. ${avaliarjogador(jogador_2)}");
console.log("Bem-vindo(a) ${jogador_3.nome}, você tem ${jogador_3.XP} XP. ${avaliarjogador(jogador_3)}");
console.log("Bem-vindo(a) ${jogador_4.nome}, você tem ${jogador_4.XP} XP. ${avaliarjogador(jogador_4)}");

console.log('O herói de nome **${jogador_1.nome}** ${avaliarJogador(jogador_1)}');
console.log('O herói de nome **${jogador_2.nome}** ${avaliarJogador(jogador_2)}');
console.log('O herói de nome **${jogador_3.nome}** ${avaliarJogador(jogador_3)}');
console.log('O herói de nome **${jogador_4.nome}** ${avaliarJogador(jogador_4)}');
