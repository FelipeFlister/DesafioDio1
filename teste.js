let CenterInfo = {
    CenterName1: "Paldea Pokémon Center",
    DoctorName1: "Joy1",
    Time1: 16,
    Trainer1: "Ash",
    HimPokemon1: {
        Pkm1: ["Pikachu" , 200],
        Pkm2: ["Fuecoco", 5],
        Pkm3: ["Doduo", 2] ,
    },
    EndTime1: 17,
}

MedicinNote1(CenterInfo)

function MedicinNote1(CenterInfo){
    console.log("Aqui está sua nota médica, na próxima vez que você vier aqui ou em outro centro Pokémon, apresente ela, e você vai ser atendido mais rapidamente.")
    console.log(CenterInfo.CenterName1 + " Note")
    console.log("Dados sobre o seu atendimento:")
    console.log("Você foi atendido por: " + CenterInfo.DoctorName1)
    console.log("Ás: " + CenterInfo.Time1 + " Horas")
    console.log("-----------------------------------------------------------------------------------------------------------------------------")
    console.log("Informações sobre o treinador:")
    console.log("Nome do Treinador: " + CenterInfo.Trainer1)
    console.log("Seus Pokémons: " + CenterInfo.HimPokemon1)
    console.log("Pokémons curados: " + CenterInfo.HimPokemon1["Pkm2"] + " e " + CenterInfo.HimPokemon1["Pkm3"])
    console.log("Fim do atendimento: " + CenterInfo.EndTime1 + " Horas")
    console.log("-----------------------------------------------------------------------------------------------------------------------------")
    console.log("A avaliação do atendimento: " + (CenterInfo.EndTime1 + CenterInfo.Time1/2 - 17))
}
