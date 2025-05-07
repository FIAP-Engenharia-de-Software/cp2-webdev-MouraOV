// ### Calculadora Simples (2 pontos)

// **Enunciado:**

// Crie uma função chamada Calcular, que recebe dois números e uma operação matemática (`+`, `-`, `*`, `/`). A função deve:

// - Retornar `"Erro: parâmetros inválidos"` se `a` ou `b` não forem números.
// - Retornar `"Erro: divisão por zero"` se tentar dividir por zero;
// - Retornar `"Erro: operação inválida"` se for passado um operador desconhecido;
// - Executar a operação correta e retornar o resultado;

function calcular(num1, num2, operador) {
  // TODO: implementar função

  if(typeof(num1) && typeof(num1) != 'number'){
    return 'Erro: parâmetros inválidos'
  }

  if(operador != '+' && operador != '-' && operador != '*' && operador != '/'){
    return 'Erro: operação inválida'
  }

  if(operador == '+'){
    return num1 + num2
  }

  if(operador == '-'){
    return num1 - num2
  }

  if(operador == '*'){
    return num1 * num2
  }

  if(operador == '/'){

    if(num2 == 0){
      return 'Erro: divisão por zero'
    }

    return num1 / num2
  }

}

//NÃO REMOVA O CÓDIGO ABAIXO
module.exports = { calcular };