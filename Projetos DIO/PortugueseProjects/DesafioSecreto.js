class PokeCenter{
    constructor(PN, PT, PL, PH, PS){
        this.PN = PN
        this.PT = PT
        this.PL = PL
        this.PH = PH
        this.PS = PS
    }
    printPokeInfo(){
        console.log(`${this.PN}  foi cadastrado com sucesso! `)
        console.log(`------------------------------------------------`)
        console.log(`Informações sobre seu Pokémon:`)
        console.log(`Seu nome é: ${this.PN}.`)
        console.log(`Seu TYPE é: ${this.PT}.`)
        console.log(`Seu LEVEL é: ${this.PL}.`)
        console.log(`Seu HP é: ${this.PH}.`)
        console.log(`Seu Sexo é: ${this.PS}.`)
        console.log(`------------------------------------------------`)
    }
}

let P0 = new PokeCenter("Poochyena", "Dark", 2, "13/13", "M")
let P1 = new PokeCenter("Zigzagoon", "Normal", 2, "13/13", "F")
let P2 = new PokeCenter("Dragonite", "Dragon", 5, "25/25", "M")
let P3 = new PokeCenter("Dragonite", "Dragon", 5, "24/24", "F")
let P4 = new PokeCenter("Dragonite", "Dragon", 5, "24/24", "F")
let P5 = new PokeCenter("Poochyena", "Dark", 3, "15/15", "F")
let P6 = new PokeCenter("Wurmple", "Bug", 2, "7/14", "M")
function PrintNotes(){
P0.printPokeInfo()
P1.printPokeInfo()
P2.printPokeInfo()
P3.printPokeInfo()
P4.printPokeInfo()
P5.printPokeInfo()
P6.printPokeInfo()
}
PrintNotes()