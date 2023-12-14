/* PN: Pokémon Name
   PT: Pokémon Type 
   PL: Pokémon Level
   PH: Pokémon Heatlh
   PS: Pokémom Sex 
*/

//--------------------------------The Poke Center Class--------------------------------------------
class PokeCenter{
    constructor(PN, PT, PL, PH, PS){
        this.PN = PN
        this.PT = PT
        this.PL = PL
        this.PH = PH
        this.PS = PS
    }
    printPokeInfo(){
        console.log(`${this.PN}  has been successfully registered! `)
        console.log(`------------------------------------------------`)
        console.log(`Information about your Pokémon:`)
        console.log(`Your Name is: ${this.PN}.`)
        console.log(`Your TYPE is: ${this.PT}.`)
        console.log(`Your LEVEL is: ${this.PL}.`)
        console.log(`Your HP is: ${this.PH}.`)
        console.log(`Your Sex is: ${this.PS}.`)
        console.log(`------------------------------------------------`)
    }
}
//--------------Variables with parameters and more informations about the PKM----------------------
let P0 = new PokeCenter("Poochyena", "Dark", 2, "13/13", "M")
let P1 = new PokeCenter("Zigzagoon", "Normal", 2, "13/13", "F")
let P2 = new PokeCenter("Dragonite", "Dragon", 5, "25/25", "M")
let P3 = new PokeCenter("Dragonite", "Dragon", 5, "24/24", "F")
let P4 = new PokeCenter("Dragonite", "Dragon", 5, "24/24", "F")
let P5 = new PokeCenter("Poochyena", "Dark", 3, "15/15", "F")
let P6 = new PokeCenter("Wurmple", "Bug", 2, "7/14", "M")
//-----------------------------Function to print all notes-----------------------------------------
function PrintNotes(){
P0.printPokeInfo()
P1.printPokeInfo()
P2.printPokeInfo()
P3.printPokeInfo()
P4.printPokeInfo()
P5.printPokeInfo()
P6.printPokeInfo()
}
//---------------------------------Execute the Functions-------------------------------------------
PrintNotes()
//--------------------------------------End of Code------------------------------------------------
