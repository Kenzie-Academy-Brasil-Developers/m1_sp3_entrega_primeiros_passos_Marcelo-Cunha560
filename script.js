// Questão 1
// let num1 = parseInt(prompt('Digite um número: '));
// let num2 = parseInt(prompt('Digite outro numero'));


// if (num1 > num2) {
//     alert(`O maior número é ${num1} e a diferença é ${String(num1 - num2)}`)
// } else {
//     alert(`O maior número é ${num2} e a diferença é ${String(num2 - num1)}`)
// }

//Questao 2
// let num1 = parseInt(prompt('Digite um número: '));
// let num2 = parseInt(prompt('Digite outro numero'));


// if (num1 > num2) {
//     alert(`O número ${num1} é maior que número ${num2}`);
// }else if(num1 == num2) {
//     alert('Números iguais');
// }else{
//     alert(`O número ${num2} é maior que número ${num1}`)
// }

//Questão 3
// let salario = parseFloat(prompt('Infomre seu salário: '));
// let emprestimo = parseFloat(prompt('Infomre o emprestimo requerido: '));

// let prestacao = salario * 0.3

// if(emprestimo > prestacao){
//     alert(`Emprestimo não concedido`);
// }else{
//     alert(`Emprestimo concedido`)
// }

// Questão 4
// let num = parseInt(prompt('Digite um número: '));

// if((num % 3 == 0) && (num % 5 == 0)){
//     alert('Valor inválido');
// }else if(num % 3 == 0){
//     alert(`Valor divisível por 3`);
// }else if(num % 5 == 0){
//     alert('Valor divisivel por 5');
// }else if(num % 2 == 0){
//     alert('É par.')
// }else if(num % 2 == 1){
//     alert('É impar.');
// }

//Questão 5
// let numero = parseInt(prompt('Digite um número de 1 à 7: '));

// if(numero == 1){
//     alert('Domingo');
// }else if(numero == 2){
//     alert('segunda-Feira');
// }else if(numero == 3){
//     alert('Terça-Feira');
// }else if(numero == 4){
//     alert('Quarta-Feira');
// }else if(numero == 5){
//     alert('Quinta-Feira');
// }else if(numero == 6){
//     alert('Sexta-Feira');
// }else if(numero == 7){
//     alert('Sábado');
// }else if(numero >= 8 || numero <= 0){
//     alert('Número invalido');
// }

// //Questão 6
// let salario = parseFloat(prompt('Digite seu salário: '));
// let valor_reajuste = parseFloat(prompt('Informe o percentual de reajuste: '));

// if(valor_reajuste > 5){
//     alert('O reajuste é ate 5%')
// }else{
//     reajuste = (salario + (salario * (valor_reajuste/100)))
//     alert(`O salário do funcionário corrigido é de: ${reajuste.toFixed(2)}`)
// }

let moeda = parseFloat(prompt("Informe um valor em dólar: "));

let cotação = 5.40

alert(`US$${moeda.toFixed(2)} é equivalente a R$${(moeda * cotação).toFixed(2)}, tendo ${cotação.toFixed(2)} como cotação`)
