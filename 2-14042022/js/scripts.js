/*
criação de funções  dos tipos 
    -sem retorno e sem argumentos
    -sem  retorno e com argumentos 
    com retorno e sem argumento 
    com Retorno e com Argumentos
*/

// Sem Retorno e sem Argumento
function dataehora(){
    var data = new Date().toLocaleDateString() +"   "+new Date().toLocaleTimeString()
    console.log(data);
}

//  com retorno e sem argumentos()
function datetime(){
    return new Date().toLocaleDateString() +"   "+new Date().toLocaleTimeString()
}
// função soma
function soma(numeros){
    
    var resultado = 0;          /*length quantidade */
    for(var i = 0 ; i <numeros.length ; i++){ 
        resultado += parseInt(numeros[i]);
    }
    return resultado;
}

function passanumeros(){
    var numeros = prompt ("Digite o numero separados por virgula");
    var n = numeros.split(",");
    return soma (n);
}

function background(){ /*math ->matemática;Round->arrendondar */
    
    var saida = ""
    
    for(var i = 1 ; i <= 30 ; i++){
    var red = Math.round(1+Math.random()*254);
    var green = Math.round(1+Math.random()*254);
    var blue = Math.round(1+Math.random()*254);
    
    saida += "<div style='width:50px;padding: 30px;background-color:rgb("+red+","+green+","+blue+")'></div>";
}
// document.body.style.backgroundColor="rgb("+red+","+green+","+blue+")";
document.getElementById("tabela").innerHTML=saida;
}