let pontos = 100;

for (let rodada = 1; rodada <= 20; rodada++) {
    let dado = Math.floor(Math.random() * 6) + 1;
    let ajuste = 0;
    
    if (dado % 2 != 0) {
        ajuste += 10;
        console.log("Rodada "+rodada+": Dado = "+dado+" (ímpar) | +10 pontos");
    } else {
        ajuste -= 5;
        console.log("Rodada "+rodada+": Dado = "+dado+" (par) | -5 pontos");
    }
    
    if (rodada % 3 == 0) {
        ajuste += 15;
        console.log("Rodada "+rodada+": Múltipla de 3 | +15 pontos");
    }
    
    if (rodada % 4 == 0) {
        ajuste -= 20;
        console.log("Rodada "+rodada+": Múltipla de 4 | -20 pontos");
    }
    
    pontos += ajuste;
    
    while (pontos < 0) {
        pontos -= ajuste;
        console.log("Pontuação negativa! Perda dobrada: "+ajuste*2+" pontos");
    }
    
    console.log("Pontuação atual: "+pontos+"\n");
}

console.log("Pontuação final: "+pontos);
if (pontos >= 50) {
    console.log("Parabéns! Você ganhou o jogo!");
} else {
    console.log("Que pena! Você perdeu o jogo!");
}
