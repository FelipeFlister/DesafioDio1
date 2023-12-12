//NDVED é igual a forma abreviada de "Números de Vitórias e Derrotas"
//TDV = é igual a forma abreviada de "Total de Vitorias"
//------------------------------Variáveis----------------------------
let Nivel = ("Cobre");
let TDV = NDVED(80,50); 
//------------------------------Funções------------------------------
function NDVED(vitorias, derrotas){
    let Saldo = vitorias - derrotas
    return Saldo
}
function Condicoes(){
    if (TDV <= 10){
        Nivel = ("Ferro");
    }
    if (TDV > 10 && TDV <= 20){
        Nivel = ("Bronze");
    }
    if (TDV > 20 && TDV <=50){
        Nivel = ("Prata");
    }
    if (TDV > 50 && TDV <= 80){
        Nivel = ("Ouro");
    }
    if (TDV > 80 && TDV <= 90){
        Nivel = ("Diamante");
    }
    if (TDV > 90 && TDV <= 100){
        Nivel = ("Lendário");
    }
    if (TDV >= 101){
        Nivel = ("Imortal");
    }
}
function Mensagem(){
console.log(`O héroi tem saldo de ${TDV} vitórias e está no nível de ${Nivel}.`);
}
function main(){
    Condicoes();
    Mensagem();
}
//------------------------Executar as Funções------------------------
main()
//---------------------------Fim do Código---------------------------