function calcularNivel(vitorias, derrotas) {
    const saldoVitorias = vitorias - derrotas;
    let nivel = "";

    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário";
    } else if (vitorias >= 101) {
        nivel = "Imortal";
    }

    console.log(`O Herói tem de saldo de **${saldoVitorias}** está no nível de **${nivel}**`);
    return { saldoVitorias, nivel };
}

// Pegando os valores passados no terminal
const args = process.argv.slice(2);
const vitorias = parseInt(args[0]);
const derrotas = parseInt(args[1]);

// Verifica se os valores são válidos
if (isNaN(vitorias) || isNaN(derrotas)) {
    console.log("Por favor, forneça dois números: vitórias e derrotas.");
} else {
    calcularNivel(vitorias, derrotas);
}
