//-----------------------------Variables-------------------------------------
let heroName = "Percy"
let xp = (3000)
let level = "Copper"
//-----------------------------Conditions------------------------------------
if (xp <= 1000 ){                                                       
    level = ("Iron");
}

if (xp >= 1001 && xp <= 2000){
    level = ("Bronze");
}

if (xp >= 2001 && xp <= 5000){
    level = ("Silver");
}

if (xp >= 6001 && xp <= 7000){
    level = ("Gold");
}

if (xp >= 7001 && xp <= 8000){
    level = ("Platinum");
}

if (xp >= 8001 && xp <= 9000){
    level = ("Ascending");
}

if (xp >= 9001 && xp <= 10000){
    nivel = ("Immortal");
}

if (xp >= 10001){
    nivel = ("Radiant");
}
//----------------------------Hero level text--------------------------------
console.log("The hero named " + heroName + ", is at the level of: " + level)
//------------------------------End of Code----------------------------------