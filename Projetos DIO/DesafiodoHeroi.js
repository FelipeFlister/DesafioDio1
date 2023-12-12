//-----------------------------variáveis--------------------------------
let nomeDoHeroi = "Percy"
let xp = (3000)
let nivel = "Cobre"
//-----------------------------condições--------------------------------
if (xp <= 1000 ){                                                       
    nivel = ("Ferro");
}

if (xp >= 1001 && xp <= 2000){
    nivel = ("Bronze");
}

if (xp >= 2001 && xp <= 5000){
    nivel = ("Prata");
}

if (xp >= 6001 && xp <= 7000){
    nivel = ("Ouro");
}

if (xp >= 7001 && xp <= 8000){
    nivel = ("Platina");
}

if (xp >= 8001 && xp <= 9000){
    nivel = ("Ascendente");
}

if (xp >= 9001 && xp <= 10000){
    nivel = ("Imortal");
}

if (xp >= 10001){
    nivel = ("Radiante");
}
//------------------------Texto do Nível do Herói---------------------------
console.log("O herói de nome " + nomeDoHeroi + ", está no nível de:" + nivel)
//----------------------------Fim do Código---------------------------------