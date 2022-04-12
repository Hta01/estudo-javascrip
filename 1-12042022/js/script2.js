/*
script para calco das operações 
matemática:
    -soma;
    -subtração;
    -multiplicação;
    -divisão;
    -resto;
será necessário mais 2 variáveis para
receber os números dos usuários
*/ 

var numero1;
var numero2;

// para obter o numero digitado pelo usuário usaremos 
// o comando prompt(que é um input para dados)
numero1 = prompt("Digite o numero","0");
numero2 = prompt("Digite outro numero");

// converter para inteiro com parseInt
var soma = parseInt(numero1) + parseInt(numero2);
var subtrair = numero1 - numero2;
var multiplicar = numero1 * numero2;
var dividir = numero1 / numero2;
var resto = numero1 % numero2;

alert("o resultado das operações é : \n\n"+
       "soma: "+soma + 
       "\nsubtração: "+subtrair+
       "\nmultiplicação: "+multiplicar+
       "\nDivisão: "+dividir+
       "\nResto: "+resto);