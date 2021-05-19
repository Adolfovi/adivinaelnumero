var numeroia;
var numeroelegido;
var score= 0;


function cero(){
numeroelegido = 0;
numeroia = Math.floor(Math.random()* 5);
  if(score<=0){
    score = score+1;
  }
  if(numeroelegido == numeroia){
    document.getElementById('parrafo1').innerHTML = "NÚMERO EN MENTE: " + numeroia ;
    document.getElementById('parrafo2').innerHTML = "NÚMERO DEL USUARIO: " + numeroelegido ;
    document.getElementById('parrafo3').innerHTML = "ACERTASTES!! " ;	
	score = score+4;
    document.getElementById('pts').innerHTML = score ;
  }
  if(numeroelegido != numeroia){
    document.getElementById('parrafo1').innerHTML = "NÚMERO EN MENTE: " + numeroia ;
    document.getElementById('parrafo2').innerHTML = "NÚMERO DEL USUARIO: " + numeroelegido ;
    document.getElementById('parrafo3').innerHTML = "FALLASTES!! " ;
    score = score-1;
    document.getElementById('pts').innerHTML = score ;
  }
}
function uno(){
numeroelegido = 1;
numeroia = Math.floor(Math.random()* 5);
  if(score<=0){
    score = score+1;
  }
  if(numeroelegido == numeroia){
    document.getElementById('parrafo1').innerHTML = "NÚMERO EN MENTE: " + numeroia ;
    document.getElementById('parrafo2').innerHTML = "NÚMERO DEL USUARIO: " + numeroelegido ;
    document.getElementById('parrafo3').innerHTML = "ACERTASTES!! " ;
score = score+4;
    document.getElementById('pts').innerHTML = score ;
  }
  if(numeroelegido != numeroia){
    document.getElementById('parrafo1').innerHTML = "NÚMERO EN MENTE: " + numeroia ;
    document.getElementById('parrafo2').innerHTML = "NÚMERO DEL USUARIO: " + numeroelegido ;
    document.getElementById('parrafo3').innerHTML = "FALLASTES!! " ;
  score = score-1;
    document.getElementById('pts').innerHTML = score ;
  }
}
function dos(){
numeroelegido = 2;
numeroia = Math.floor(Math.random()* 5);
  if(score<=0){
    score = score+1;
  }
  if(numeroelegido == numeroia){
    document.getElementById('parrafo1').innerHTML = "NÚMERO EN MENTE: " + numeroia ;
    document.getElementById('parrafo2').innerHTML = "NÚMERO DEL USUARIO: " + numeroelegido ;
    document.getElementById('parrafo3').innerHTML = "ACERTASTES!! " ;
score = score+4;
    document.getElementById('pts').innerHTML = score ;
  }
  if(numeroelegido != numeroia){
    document.getElementById('parrafo1').innerHTML = "NÚMERO EN MENTE: " + numeroia ;
    document.getElementById('parrafo2').innerHTML = "NÚMERO DEL USUARIO: " + numeroelegido ;
    document.getElementById('parrafo3').innerHTML = "FALLASTES!! " ;
  score = score-1;
    document.getElementById('pts').innerHTML = score ;
  }
}
function tres(){
numeroelegido = 3;
numeroia = Math.floor(Math.random()* 5);
  if(score<=0){
    score = score+1;
  }
  if(numeroelegido == numeroia){
    document.getElementById('parrafo1').innerHTML = "NÚMERO EN MENTE: " + numeroia ;
    document.getElementById('parrafo2').innerHTML = "NÚMERO DEL USUARIO: " + numeroelegido ;
    document.getElementById('parrafo3').innerHTML = "ACERTASTES!! " ;
score = score+4;
    document.getElementById('pts').innerHTML = score ;
  }
  if(numeroelegido != numeroia){
    document.getElementById('parrafo1').innerHTML = "NÚMERO EN MENTE: " + numeroia ;
    document.getElementById('parrafo2').innerHTML = "NÚMERO DEL USUARIO: " + numeroelegido ;
    document.getElementById('parrafo3').innerHTML = "FALLASTES!! " ;
  score = score-1;
    document.getElementById('pts').innerHTML = score ;
  }
}
function cuatro(){
numeroelegido = 4;
numeroia = Math.floor(Math.random()* 5);
  if(score<=0){
    score = score+1;
  }
  if(numeroelegido == numeroia){
    document.getElementById('parrafo1').innerHTML = "NÚMERO EN MENTE: " + numeroia ;
    document.getElementById('parrafo2').innerHTML = "NÚMERO DEL USUARIO: " + numeroelegido ;
    document.getElementById('parrafo3').innerHTML = "ACERTASTES!! " ;
score = score+4;
    document.getElementById('pts').innerHTML = score ;
  }
  if(numeroelegido != numeroia){
    document.getElementById('parrafo1').innerHTML = "NÚMERO EN MENTE: " + numeroia ;
    document.getElementById('parrafo2').innerHTML = "NÚMERO DEL USUARIO: " + numeroelegido ;
    document.getElementById('parrafo3').innerHTML = "FALLASTES!! " ;
  score = score-1;
    document.getElementById('pts').innerHTML = score ;
  }
}