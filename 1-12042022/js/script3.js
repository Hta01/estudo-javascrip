/*
script para solicitação de cor ao
usuário.quando o usuário digitar a cor
deseja,então iremos mudar a cor de 
fundo do body. caso o usuário digite uma
cor não listada, mudaremos a com de 
fundo para uma pré estabelecida e sera 
exibida ao usuário.
*/
var cor = prompt("Digite:\n\n"+
                  "1 - preto"+
                  "\n2 - amarelo"+
                  "\n3 - vermelho"+
                  "\n4 - azul"+
                  "\n5 - laranja")
if(cor == 1){
    document.body.style.backgroundColor="black";
}
else if(cor == 2){
    document.body.style.backgroundColor="yellow";
}

else if(cor == 3){
    document.body.style.backgroundColor="red";
}

else if(cor == 4){
    document.body.style.backgroundColor="blue";
}

else if(cor == 5){
    document.body.style.backgroundColor="orange";
}
else{
    document.body.style.backgroundColor="grey"
    alert("voce digitou uma opção inexistente");
}