/* NDP: Nome do Pokémon
   TDP: Tipo do Pokémon
   NIP: Nível do Pokémon
   PS: Pontos de Saúde
   SDP: Sexo do Pokémom
*/

//--------------------------------A Classe do Centro Pokémon---------------------------------------
class CentroPokemon{
    constructor(NDP, TDP, NIP, PS, SDP){
        this.NDP = NDP
        this.TDP = TDP
        this.NIP = NIP
        this.PS = PS
        this.SDP = SDP
    }
    ImprimirNotas(){
        console.log(`${this.NDP}  foi cadastrado com sucesso! `)
        console.log(`------------------------------------------------`)
        console.log(`Informações sobre seu Pokémon:`)
        console.log(`Seu nome é: ${this.NDP}.`)
        console.log(`Seu TYPE é: ${this.TDP}.`)
        console.log(`Seu LEVEL é: ${this.NIP}.`)
        console.log(`Seu HP é: ${this.PS}.`)
        console.log(`Seu Sexo é: ${this.SDP}.`)
        console.log(`------------------------------------------------`)
    }
}
//--------------Variáveis com parametros e mais informações sobre os PKM---------------------------
let P0 = new CentroPokemon("Poochyena", "Sombrio", 2, "13/13", "M")
let P1 = new CentroPokemon("Zigzagoon", "Normal", 2, "13/13", "F")
let P2 = new CentroPokemon("Dragonite", "Dragão", 5, "25/25", "M")
let P3 = new CentroPokemon("Dragonite", "Dragão", 5, "24/24", "F")
let P4 = new CentroPokemon("Dragonite", "Dragão", 5, "24/24", "F")
let P5 = new CentroPokemon("Poochyena", "Sombrio", 3, "15/15", "F")
let P6 = new CentroPokemon("Wurmple", "Inseto", 2, "7/14", "M")
//---------------------Funçãoto para imprimir todas as notas---------------------------------------
function ImprimirNotas(){
P0.ImprimirInfo()
P1.ImprimirInfo()
P2.ImprimirInfo()
P3.ImprimirInfo()
P4.ImprimirInfo()
P5.ImprimirInfo()
P6.ImprimirInfo()
}
//----------------------------Executar as Funções--------------------------------------------------
ImprimirNotas()
//------------------------------Fim do Código------------------------------------------------------
