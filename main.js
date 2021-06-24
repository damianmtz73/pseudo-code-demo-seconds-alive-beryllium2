let yearOfBirthInput= prompt("Enter the year of your birth.")
let monthOfBirthInput= prompt("Enter the month you were born in.")
let monthOfBirthInput= parseFloat(monthOfBirth)
let yearOfBirthInput= parseFloat(yearOfBirth)
let secInMonth= 60*60*24*30
let secInYear= secInMonth*12
let secBirthYear= secInMonth*(12-monthOfBirth)
let secCurrentYear= secInMonth*Data