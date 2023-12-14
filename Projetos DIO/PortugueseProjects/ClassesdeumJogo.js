//--------------------------------A Classe do Player-----------------------------------------------
class Player{
    constructor(name, age, type, typeAttack){
        this.name = name
        this.age = age
        this.type = type
        this.typeAttack = typeAttack
    }
    atacar(){
       console.log(`O héroi ${this.name}, do tipo ${this.type}, atacou usando ${this.typeAttack}.`)
        }
 }
//-------------------------Função com os parametros e ataques--------------------------------------
function HeroesAttack()
{
let typeHero1 = new Player("Nico", 16, "Mago", "magia")
typeHero1.atacar()
let typeHero2 = new Player("Jason", 16, "Guerreiro", "espada")
typeHero2.atacar()
let typeHero3 = new Player("Frank", 16, "Monge", "artes maciais")
typeHero3.atacar()
let typeHero4 = new Player("Leo", 16, "Ninja", "shuriken")
typeHero4.atacar()
}
//--------------------------------Executar as funções----------------------------------------------
HeroesAttack()
//-----------------------------------Fim do Código-------------------------------------------------