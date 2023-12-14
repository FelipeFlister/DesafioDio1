//--------------------------------The Player Class-------------------------------------------------
class Player{
    constructor(Name, Age, Type, TypeAttack){
        this.Name = Name
        this.Age = Age
        this.Type = Type
        this.TypeAttack = TypeAttack
    }
    Attack(){
       console.log(`The hero ${this.Name}, of type ${this.Type}, attacked using ${this.TypeAttack}.`)
        }
 }
//-------------------------Function with parameters and attacks------------------------------------
function HeroesAttack()
{
let TypeHero1 = new Player("Nico", 16, "Mage", "magic")
TypeHero1.Attack()
let TypeHero2 = new Player("Jason", 16, "Warrior", "Sworld")
TypeHero2.Attack()
let TypeHero3 = new Player("Frank", 16, "Monk", "Martial arts")
TypeHero3.Attack()
let TypeHero4 = new Player("Leo", 16, "Ninja", "Shuriken")
TypeHero4.Attack()
}
//--------------------------------Execute the functions--------------------------------------------
HeroesAttack()
//-----------------------------------End of Code---------------------------------------------------