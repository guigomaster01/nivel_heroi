const readline = require('readline');
const heroiNome = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function classificarHeroi(nomeHeroi, xpHeroi) {
    let nivelHeroi = "";

    if (xpHeroi <= 1000) {
        nivelHeroi = "Ferro";
    } else if (xpHeroi >= 1001 && xpHeroi <= 2000) {
        nivelHeroi = "Bronze";
    } else if (xpHeroi >= 2001 && xpHeroi <= 5000) {
        nivelHeroi = "Prata";
    } else if (xpHeroi >= 5001 && xpHeroi <= 7000) {
        nivelHeroi = "Ouro";
    } else if (xpHeroi >= 7001 && xpHeroi <= 8000) {
        nivelHeroi = "Platina";
    } else if (xpHeroi >= 8001 && xpHeroi <= 9000) {
        nivelHeroi = "Ascendente";
    } else if (xpHeroi >= 9001 && xpHeroi <= 10000) {
        nivelHeroi = "Imortal";
    } else if (xpHeroi >= 10001) {
        nivelHeroi = "Radiante";
    }

    return `O Herói de nome ${nomeHeroi} está no nível de ${nivelHeroi}`;
}
heroiNome.question('Digite o nome do herói: ', function(nomeHeroi) {
    heroiNome.question('Digite a experiência (XP) do herói: ', function(xpHeroi) {
        const xp = parseInt(xpHeroi);
        const resultado = classificarHeroi(nomeHeroi, xp);

        console.log(resultado);
        heroiNome.close();
    });
});