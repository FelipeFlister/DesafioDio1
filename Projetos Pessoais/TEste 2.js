//código para dia e noite, eclipses, chuva de slime, invasão goblim e pirata, e aparecimento de chefões aleatorios
//day dura 10 minutos, tem que ter o sol, o eclipse acontece de dia, goblim e pirate de dia
//night dura 10 minutos, tem moon, e chutluEye ocorre em uma frequencia e condições de dias
let dayDuration = "10"
let nightDuration = 10 
let dayNumber = 1
let timeday = "clear"
let boss = false
let day = [dayDuration, true, timeday ]
let night = [ nightDuration, !day, timeday]
let moon = (timeday === "clear" && day === false)
let sun = (timeday === "clear" && day[1] === true)
let bloodMoon = (((day && boss) === false) && dayNumber === 50 || 150 || 250)
let Invasion = (((night && boss && eclipses ) === false))
let eclipses = (((night && boss) === false) && dayNumber === 100 || 200 || 300)
let slimeRain = (((night && eclipses && Invasion) === false))
let goblimInvasion = (((night && boss && pirateInvasion && slimeRain) === false) && dayNumber === 45 && Invasion === true || provocateGoblimItem === tue )
let pirateInvasion = (((night && boss && goblimInvasion && slimeRain) === false) && dayNumber === 75 && Invasion === true || woodleg === true)
let chutluEye = (((day && bloodMoon && slimeRain && Invasion) === false) && dayNumber === 25)
let slimeKing = (((slimeRain || coroa) === true) )

if (chutluEye === true){
  boss === true
  nightDuration === 15
  dayDuration === 5
  console.log("Você se sente sendo observado por algo")
}

if (slimeRain === true){
  timeday === "rain"
  dayDuration === 15
  nightDuration === 5
  console.log("Está caindo uma chuva de slime")
}

if (goblimInvasion === true){
  dayDuration === 15
  nightDuration === 5

}

console.log("Check-in, day conditions:")
console.log("Está de dia? " + day[1])
console.log("Como está o clima? " + timeday)
console.log("Que dia é hoje? " + dayNumber)
console.log("Está tendo sol? " + sun)

console.log("Check-in, night conditions:")
console.log("Está de noite? " + night[1])
console.log("Como está o clima? " + timeday)
console.log("Que dia é hoje? " + dayNumber)
console.log("Está tendo sol? " + moon)