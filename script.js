//Passo 1:
//Crie uma função chamada somar que recebe dois números como parâmetros e retorna a soma dos dois números.

function somar(num1, num2) {
  return num1 + num2;
}

let num1 = 10
let num2 = 56

let soma = num1 + num2
//console.log(soma)


//Passo 2:
//Crie uma função chamada imprimirResultado que recebe um número como parâmetro e imprime uma mensagem no console com o resultado.

function imprimirResultado(resultado) {
console.log("O resultado da soma é: " + resultado);
}

//const resultado = soma;
//imprimirResultado(resultado); 

//Passo 3:
//Adicione uma callback para a função somar. A callback deve ser executada após a soma dos dois números e deve chamar a função imprimirResultado passando o resultado da soma como parâmetro.

function somar(num1, num2, callback) {
    let resultado = num1 + num2;
    callback(resultado);
  }
  
somar(2, 3, imprimirResultado);


//Passo 4:
//Execute o código acima e verifique se a mensagem "O resultado da soma é: 5" é exibida no console.