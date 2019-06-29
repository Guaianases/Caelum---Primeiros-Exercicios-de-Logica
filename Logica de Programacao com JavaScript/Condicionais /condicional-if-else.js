/*
condicionais avaliam se determinadas condicões 
são verdadeiras ou falsas
Não poderá ter faltas maior que 25
*/
let not1 = parseFloat(prompt("Digite a nota"));
let not2 = parseFloat(prompt("Digite a novamente nota"));
let faltas = parseFloat(prompt("Digite as faltas"));
let media = (not1 + not2) /2 ;

if (media >= 6.0 && faltas <= 25){

    alert("Aluno aprovado com média:  ", media);

}else if (media <= 6.0 && faltas <= 25) {

    alert("Aluno reprovado");

}

/*
avaliar média para aprovação do aluno
Se a média de nota  de (nota1 + nota2) for maior ou 
igual a 6.0 (seis) o aluno estará aprovado 
caso contrário, estára reprovado

*/