/*array de abas*/
var ABAS = new Array(); 

/*aba ativa no momento*/
/*var ABA_ATIVA = ""       */

/*contadores do array*/
var ID = 1
var BLOCO = 2
var CAMPOS = 2
        
function defineAba(Id, Bloco){
   var Aba = new Array(CAMPOS);
   Aba[ID] = Id;
   Aba[BLOCO] = Bloco;
   ABAS.push(Aba);
}

function defineAbaAtiva(Id){
   trataCliqueAba(Id);
}

function trataMouseAba(aba){
   aba.style.cursor = "pointer";
}

function trataCliqueAba(Id){
   for (var i = 0; i < ABAS.length; i++){
         var Aba = ABAS[i];

         if (Aba[ID] == Id) 
             ativaAba(Aba);
         else 
             inativaAba(Aba);
    }
}

function ativaAba(Aba){
    var seleciona_aba = Aba[ID];
    var aba = document.getElementById(seleciona_aba);
    mudaClasse(aba, "abaativa"); // chama o css para fazer a troca de cor

    var seleciona_bloco = Aba[BLOCO];
    var bloco = document.getElementById(seleciona_bloco);
    bloco.style.display = "block";
}

function inativaAba(Aba){
    var seleciona_aba = Aba[ID];
    var aba = document.getElementById(seleciona_aba);
    mudaClasse(aba, "abainativa"); // chama o css para fazer a troca

    var seleciona_bloco = Aba[BLOCO];
    var bloco = document.getElementById(seleciona_bloco);
    bloco.style.display = "none";
}
        
function mudaClasse(objeto, classe){
    objeto.className = classe;
}

defineAba("aba_noticias", "noticias");

defineAba("aba_encontros_oficinas", "encontros_oficinas" );

defineAbaAtiva("aba_noticias");
