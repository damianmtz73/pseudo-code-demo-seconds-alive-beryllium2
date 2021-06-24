let yearOfBirthInput= prompt("Enter the year of your birth.")
let monthOfBirthInput= prompt("Enter the month you were born in.")
let currentMonth= new Date().getMonth()+1
let currentYear= new Date().getFullYear()

console.log({yearOfBirthInput})
console.log({monthOfBirthInput})
console.log({currentMonth})
console.log({currentYear})

let monthOfBirth= parseInt(monthOfBirthInput)
let yearOfBirth= parseInt(yearOfBirthInput)


console.log({currentYear})
console.log({currentMonth})

let secInMonth= 60*60*24*30
let secInYear= secInMonth*12
let secBirthYear= secInMonth*(12-monthOfBirth)
let secCurrentYear= secInMonth*currentMonth
let secondsInBetween= secInYear* (currentYear-yearOfBirth-2)
let secondsSinceBirth= secBirthYear+secondsInBetween+secCurrentYear
console.log({secondsSinceBirth})

document.write(`<h3>You have been born for ${(secondsSinceBirth).toLocaleString()}seconds approximately.</h3>`)