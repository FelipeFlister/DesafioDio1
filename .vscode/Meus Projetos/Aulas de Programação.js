let boss = false;
let playermoonitem = false;
let date = 1;

let cfbd = ((boss === false) && (date === 100)) || (playermoonitem === true);
let luaDeSangue = cfbd;
let dormir = (luaDeSangue === false) && (boss === false) && (cfbd === false);

if (luaDeSangue === true) {
  console.log("Vai ter blood moon!");
} else {
  console.log("Não vai ter BM!!!");
}

if (dormir === true) {
  console.log("Durma em paz" + ", ...Espere um pouco...");
} else {
  console.log("Você vai ter pesadelos esta noite!");
}

let day = true;
let night = (!day);
let tn = 26;
let dayBossItem = true;
let nightBossItem = true;

let dayBoss = (day === true) && (tn >= 25) || (dayBossItem === true);
let nightBoss = (night) && (tn >= 10) || (nightBossItem === true);

console.log("Pode aparecer ou ser invocado um dayBoss:" + dayBoss);
console.log("Pode aparecer ou ser invocado um nightBoss:" + nightBoss);

if (dayBoss || nightBoss) {
  boss = true;
}

if (dayBoss && nightBoss) {
  console.log("Você vai ter pesadelos o dia inteiro!");
}

if (dayBoss && !dayBossItem) {
  console.log("Um day boss irá aparecer");
  boss = true;
}

if (nightBoss && !nightBossItem) {
  console.log("Um night boss irá aparecer");
  boss = true;
}

if ((dayBossItem || nightBossItem) === true) {
  console.log("Você pode invocar um day ou night boss");
} else {
  console.log("Você não pode invocar nenhum boss");
}

dormir = !boss;
console.log("Você pode dormir:" + dormir);
