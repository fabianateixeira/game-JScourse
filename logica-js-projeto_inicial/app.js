alert('Boas vindas ao jogo do número secreto!');
let numeroMaximo = 5000;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
let chute;
//console.log('Valor do chute: ', chute);
let tentativas = 1;


//enquanto o chute não for igual ao número secreto
while (chute != numeroSecreto) {
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}:`);
    //console.log('Resultado da comparação: ', chute == numeroSecreto);
    if (chute == numeroSecreto) {
      break;      
    } else {
        if (numeroSecreto > chute) {
            alert(`Você errou. O número secreto é maior do que ${chute}.`);
        } else {
            alert(`Você errou. O número secreto é menor do que ${chute}.`);
        }
        //tentativas = tentativas + 1;
        tentativas++;
    };
    //console.log('Valor do número secreto: ', numeroSecreto);}
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert (`Isso aí! Você descobriu o número secreto (${numeroSecreto}) com ${tentativas} ${palavraTentativa}.`);

//if (tentativas > 1){
//alert(`Isso aí! Você descobriu o número secreto (${numeroSecreto}) com ${tentativas} tentativas.`);
//} else {
//  alert (`Isso aí! Você descobriu o número secreto (${numeroSecreto}) com ${tentativas} tentativa.`);
//}








//desafios

//alert ('Seja bem vindo(a)!');
//let contador;
//contador = prompt ('Digite um número de 5 a 15.');

//while (contador < 15) {
    
  //  contador++;
   // alert (contador);
//}



//alert('Seja bem vindo!');
//let diaDaSemana = prompt('Que dia da semana é hoje?');

//if (diaDaSemana == 'Domingo' || diaDaSemana == 'Sábado'){
//  alert ('Bom final de semana!')
//} else {
//  alert ('Boa semana!')
//}