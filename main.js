// Line 1 declared the varibale myName. Line 2 assigned a value to variable myName
let myAge
myAge = 35
// earlyYears declared and initialized 
var earlyYears = 2
// number of years muplitplied by 10.5 to reassign a value to earlyYears
earlyYears *= 10.5
// years after the 1st 2 yrs declared as variable laterYears 
var laterYears = myAge - 2
// laterYears reassigned a value of laterYears time 4
laterYears *= 4
// variable declared and assigned a value of laterYears plus earlyYears
var myAgeInDogYears = laterYears + earlyYears
// variable my name declared and assigned a value of Brooke. 
var myName = "Brooke"
// built in method used to change name to all lower case
.toLowerCase(myName)

// string intepolation used to create a statement 
var myStr = `My name is ${myName} I am ${myAge} years old in human years 
which is ${myAgeInDogYears} years old in dog years.`

// console.log(earlyYears)
// console.log(laterYears)
// console.log(myAgeInDogYears)
// console.log(myName)

// console/log use to call the created string
console.log(myStr)
