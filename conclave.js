const entrada = require("prompt-sync")({ sigint: false });

console.log("=== Eleição do Papa ===");

// Contadores de votos 
let votosJoao = 0;
let votosJones = 0;
let votosPablo = 0;
let votosNikolas = 0;
let votosPutin = 0;

let continuar = true;

while (continuar) {
    console.log("\nEscolha em quem deseja votar:");
    console.log("[1] João Campos");
    console.log("[2] Jones Emanuel");
    console.log("[3] Pablo Marçal");
    console.log("[4] Nikolas Ferreira");
    console.log("[5] Putin");
    console.log("[0] Encerrar votação");

    let opcao = entrada("Digite sua opção: ");

    if (opcao === "0") {
        continuar = false;
        console.log("\nEncerrando a votação...");
    } else if (opcao === "1") {
        votosJoao++;
        console.log("Voto registrado em João Campos!");
    } else if (opcao === "2") {
        votosJones++;
        console.log("Voto registrado em Jones Emanuel!");
    } else if (opcao === "3") {
        votosPablo++;
        console.log("Voto registrado em Pablo Marçal!");
    } else if (opcao === "4") {
        votosNikolas++;
        console.log("Voto registrado em Nikolas Ferreira!");
    } else if (opcao === "5") {
        votosPutin++;
        console.log("Voto registrado em Putin!");
    } else {
        console.log("Opção inválida! Tente novamente.");
    }
}

// Cálculo dos resultados
let totalVotos = votosJoao + votosJones + votosPablo + votosNikolas + votosPutin;
let necessario = Math.ceil((2 / 3) * totalVotos);

console.log("\n=== RESULTADO FINAL ===");
console.log(`Total de votos: ${totalVotos}`);
console.log(`João Campos: ${votosJoao}`);
console.log(`Jones Emanuel: ${votosJones}`);
console.log(`Pablo Marçal: ${votosPablo}`);
console.log(`Nikolas Ferreira: ${votosNikolas}`);
console.log(`Putin: ${votosPutin}`);

console.log(`\nPara ser eleito, é necessário pelo menos ${necessario} votos.`);

// Verificação do vencedor
if (votosJoao >= necessario) {
    console.log("João Campos foi eleito Papa!");
} else if (votosJones >= necessario) {
    console.log("Jones Emanuel foi eleito Papa!");
} else if (votosPablo >= necessario) {
    console.log("Pablo Marçal foi eleito Papa!");
} else if (votosNikolas >= necessario) {
    console.log("Nikolas Ferreira foi eleito Papa!");
} else if (votosPutin >= necessario) {
    console.log("Putin foi eleito Papa!");
} else {
    console.log("Nenhum candidato atingiu 2/3 dos votos. Nova votação deve ser realizada.");
}
