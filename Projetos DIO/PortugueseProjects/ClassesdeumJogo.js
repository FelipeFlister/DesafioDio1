//--------------------------------A Classe do Player-----------------------------------------------
class Jogador{
    constructor(Nome, Idade, Tipo, TipoDeAtaque){
        this.Nome = Nome
        this.Idade = Idade
        this.Tipo = Tipo
        this.TipoDeAtaque = TipoDeAtaque
    }
    Atacar(){
       console.log(`O héroi ${this.Nome}, do tipo ${this.Tipo}, atacou usando ${this.TipoDeAtaque}.`)
        }
 }
//-------------------------Função com os parametros e ataques--------------------------------------
function AtaqueDosHerois()
{
let TipoDoHeroi1 = new Jogador("Nico", 16, "Mago", "magia")
TipoDoHeroi1.Atacar()
let TipoDoHeroi2 = new Jogador("Jason", 16, "Guerreiro", "espada")
TipoDoHeroi2.Atacar()
let TipoDoHeroi3 = new Jogador("Frank", 16, "Monge", "artes maciais")
TipoDoHeroi3.Atacar()
let TipoDoHeroi4 = new Jogador("Leo", 16, "Ninja", "shuriken")
TipoDoHeroi4.Atacar()
}
//--------------------------------Executar as funções----------------------------------------------
AtaqueDosHerois()
//-----------------------------------Fim do Código-------------------------------------------------