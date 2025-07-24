function calcular(){
    const valor1 = parseInt(document.getElementById("valor1").value)
    const valor2 = parseInt(document.getElementById("valor2").value)

   let resultado = ""

    if (isNaN(valor1) || isNaN(valor2)) {
        document.getElementById('resultado').innerText = "Por favor, preencha os dois números corretamente.";
        return;
    }

   function soma(valor1, valor2){
        return valor1 + valor2

   }

   function subtracao(valor1, valor2){
        return valor1 - valor2

   }

   function multiplicacao(valor1, valor2){
        return valor1 * valor2
   }

   function divisao(valor1, valor2){
        if (valor2 === 0) {
        return "Erro: divisão por zero";
    }
        return valor1 / valor2
   }

   const operacao = document.getElementById("operacao").value

    switch (operacao) {
        case "soma":
            resultado = soma(valor1, valor2)
            break;
        case "subtracao":
            resultado = subtracao(valor1, valor2)
            break;
        case "multiplicacao":
            resultado = multiplicacao(valor1, valor2) 
            break; 
        case "divisao":
            resultado = divisao(valor1,valor2)   
            break;  
        default:
            resultado = "Operação inválida"
            break;
    }

    document.getElementById('resultado').innerText = resultado
}

document.getElementById("btnCalcular").addEventListener("click", calcular);