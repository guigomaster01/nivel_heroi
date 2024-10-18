const readline = require('readline');
const heroiNome = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function classificarHeroi(nomeHeroi, xpHeroi) {
    let nivelHeroi = "";

    if (xpHeroi <= 1000) {
        nivelHeroi = "Ferro";
    } else if (xpHeroi <= 2000) {
        nivelHeroi = "Bronze";
    } else if (xpHeroi <= 5000) {
        nivelHeroi = "Prata";
    } else if (xpHeroi <= 7000) {
        nivelHeroi = "Ouro";
    } else if (xpHeroi <= 8000) {
        nivelHeroi = "Platina";
    } else if (xpHeroi <= 9000) {
        nivelHeroi = "Ascendente";
    } else if (xpHeroi <= 10000) {
        nivelHeroi = "Imortal";
    } else {
        nivelHeroi = "Radiante";
    }

    return `O Herói de nome ${nomeHeroi} está no nível de ${nivelHeroi}`;
}

heroiNome.question('Digite o nome do herói: ', function(nomeHeroi) {
    heroiNome.question('Digite a experiência (XP) do herói: ', function(xpHeroi) {
        const xp = parseInt(xpHeroi, 10);
        if (isNaN(xp)) {
            console.log('Por favor, insira um número válido para XP.');
        } else {
            const resultado = classificarHeroi(nomeHeroi, xp);
            console.log(resultado);
        }
        heroiNome.close();
    });
});
