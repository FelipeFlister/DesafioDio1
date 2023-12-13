//NOWAD = is the same as the short form of "Number of Wins and Defeats"
//TW = is the same as the short form of "Total Wins"
//------------------------------Variáveis----------------------------
let Level = ("Copper");
let TW = NDVED(80,50); 
//------------------------------Funções------------------------------
function NDVED(wins, defeats){
    let Balance = wins - defeats
    return Balance
}
function Conditions(){
    if (TW <= 10){
        Level = ("Iron");
    }
    if (TW > 10 && TW <= 20){
        Level = ("Bronze");
    }
    if (TW > 20 && TW <=50){
        Level = ("Silver");
    }
    if (TW > 50 && TW <= 80){
        Level = ("Gold");
    }
    if (TW > 80 && TW <= 90){
        Level = ("Diamond");
    }
    if (TW > 90 && TW <= 100){
        Level = ("Legendary");
    }
    if (TW >= 101){
        Level = ("Immortal");
    }
}
function Message(){
console.log(`The hero has a balance of ${TW} wins, and is at ${Level} level.`);
}
function Main(){
    Conditions();
    Message();
}
//------------------------Execute the Functions----------------------
Main()
//---------------------------End of Code-----------------------------