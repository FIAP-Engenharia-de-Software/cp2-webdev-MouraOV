// ## Calculadora de IMC (1 ponto)

// **Enunciado:**

// Crie a função calcularIMC que receba peso e altura e retorne:

// - `"Abaixo do peso"` se < 18.5
// - `"Peso normal"` se entre 18.5 e 24.9
// - `"Sobrepeso"` se entre 25 e 29.9
// - `"Obesidade"` se ≥ 30
// - `"Erro"` para dados inválidos

// **Fórmula IMC**: peso / (altura * altura)

function calcularIMC(peso, altura) {

  // TODO: implementar função
  const imc = peso / (altura * altura)

  if(altura == 0){
    return 'Erro'
  }

 if(typeof(peso) != 'number' || typeof(altura) != 'number'){
  return 'Erro'
}

  if(imc < 18.5){
    return "Abaixo do peso"
  }

  if(imc >= 18.5 && imc <= 24.9){
    return "Peso normal"
  }

  if(imc >= 25 && imc <= 29.9){
    return "Sobrepeso"
  }

  if(imc => 30){
    return "Obesidade"
  }
}

let resposta = calcularIMC(100, 1.7)

console.log(resposta)



// NÃO REMOVA O CÓDIGO ABAIXO
module.exports = { calcularIMC };