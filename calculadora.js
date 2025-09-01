// Importa a biblioteca de entrada
const entrada = require('prompt-sync')({ sigint: false });

console.log("=== Calculadora Simples ===");

let continuar = true;

while (continuar) {
    console.log("\nEscolha uma operação:");
    console.log("[+] Soma");
    console.log("[-] Subtração");
    console.log("[*] Multiplicação");
    console.log("[/] Divisão");
    console.log("[0] Sair");

    const operador = entrada("Digite o operador (+, -, *, / ou 0 para sair): ");

    if (operador === "0") {
        continuar = false;
        console.log("Encerrando a calculadora...");
    } else if (["+", "-", "*", "/"].includes(operador)) {
        const num1 = Number(entrada("Digite o primeiro número: "));
        const num2 = Number(entrada("Digite o segundo número: "));
        let resultado;

        switch (operador) {
            case "+":
                resultado = num1 + num2;
                break;
            case "-":
                resultado = num1 - num2;
                break;
            case "*":
                resultado = num1 * num2;
                break;
            case "/":
                if (num2 === 0) {
                    resultado = "Erro: divisão por zero!";
                } else {
                    resultado = num1 / num2;
                }
                break;
        }

        console.log(`Resultado: ${resultado}`);
    } else {
        console.log("Operador inválido! Tente novamente.");
    }
}
