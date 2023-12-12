//if, else if e else
let N = 1
if (N > 1){
    console.log("2 ou +")
}
else if (N < 1){
    console.log("1 ou -")
}
else{
    console.log(N)
}
//----------------------------------------------------------------------------------------
//swith case, case conjunto, break e default
let PC = "Coloque o nome de um pokémon aqui!"
switch(PC){
    case "pikachu":
        console.log("A carta é do pikachu")
        break
    case "squirtle":
        console.log("A carta é do squirtle")
        break
    case "charmander":
    case "bulbassaur":
        console.log("A carta é do " + PC)
        break

default:
    console.log("Que Pokémon está nesta carta")
}
//-----------------------------------------------------------------------------------------
//for
let Pocoes = 0
let PontosDeVida = 1
for (let i = 1; i <= 20; i++){ //Receber Poções
   Pocoes++
}

console.log("Você ganhou " + Pocoes + " poções de vida.")

if (Pocoes === 20){
    console.log("Você tem " + PontosDeVida + " Pontos de Vida.")
    console.log("Você quer tomar suas poções de vida?")
    console.log("...")
    console.log("...")
    console.log("...")
    console.log("Sim")

    for( l = 1; l <= 20; l++){
        PontosDeVida += 20
        Pocoes -= 1
    }

    if (PontosDeVida === 401){
    PontosDeVida -= 1
    console.log("Você agora tem: " + Pocoes + " Poções")
    console.log("Você agota tem: " + PontosDeVida + " Pontos de vida.")
    }
}
//----------------------------------------------------------------------------------------------------
//While
let terraria = 84
let minecraft = 50
let anos = 12
while(terraria > minecraft){//enquanto terraria for melhor que minecraft
    console.log("unity > unreal")//unity vai ser melhor do que unreal
    minecraft += 5//some 5 a minecraft
    anos++
}
console.log(anos)

if (anos > 20){
minecraft -= 50;
terraria += 16;
console.log("Minecraft faliu com: " + minecraft + " pontos de avaliação" );
console.log("Terraria vence a competição contra Minecraft, depois que ele perde 50 pontos, e lança terraria 2 que faz sucesso! com: " + terraria );
}
//--------------------------------------------------------------------------------------------------------------------------------------------------
//Do While / Faça enquanto
let unrealgraphics = 2
let unitygraphics = 1
let unrealperformace = 1
let unityperformace = 2
let unrealprogramation = 2
let unityprogramation = 1
let unreal3D = 2
let unity3D = 1
let unreal2D = 1
let unity2D = 2
let Unreal = ((unitygraphics + unrealperformace + unrealprogramation + unreal3D + unity2D)/5)
let Unity = ((unitygraphics + unityperformace + unityprogramation + unity3D + unity2D)/5)
console.log(Unreal)
console.log(Unity)
do{
    console.log("Unreal é melhor do que Unity")
    Unity += 0.2
}
while(Unity<Unreal)
//----------------------------------------------------------------------------------------------
//funções
let PvZI = 1
main()
function main(){
    PvzP()
    PvzZ()
}
function PvzP(){
    console.log("Você é do time das plantas")
}
function PvzZ(){
    if (PvZI === 0){
        console.log("Você é do time dos zumbis")
    }
}
//--------------------------------------------------------------------
//funções com parametros//E uma função sem valor ou undefined
NPCStore(100, "Chapéu", true, "dia")
function NPCStore(preco, item, edisponivel, quehorae){
    console.log(`O Charles está vendendo ${item} por R$${preco}. Venha dar uma olhada!`)
    console.log(`Você foi dar uma olhada e perguntou se é disponível, e em que horário ele vende`)
    if (quehorae === "dia"){
        edisponivel = true
    }
    if (quehorae === "dia"){
        console.log(`Você deu sorte de passar na loja agora de ${quehorae}, compre o novo item disponível!`)
    }

    else{
        console.log(`Ele não está vendendo este item agora de ${quehorae}`)
    }
    
}
NPCStore2(undefined,"Arma Carmim", true, "dia")
function NPCStore2(preco2 = 200, item2, edisponivel2, quehorae2){
    console.log(`O Charles está vendendo agora um novo item, o ${item2} por R$${preco2}. Venha dar uma olhada!`)
    console.log(`Você foi outra vez dar uma olhada e perguntou se é disponível, e em que horário ele vende`)
    if (quehorae2 === "dia"){
        edisponivel2 = false
    }

    if (quehorae2 === "dia"){
        console.log(`Ele não está vendendo este item agora de ${quehorae2}`)
    }

    else{
        console.log(`Você deu sorte de passar na loja agora de ${quehorae2}, compre o novo item disponível!`)
    }

}
//---------------------------------------------------------------------
//funções com retornos
function soma (n1, n2){
   const s = n1 + n2
   return s
}

soma1 = soma(1,2)
console.log(soma1)