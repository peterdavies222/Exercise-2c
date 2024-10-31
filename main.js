console.log ("JavaScript is working!")

// Declare userLocation variable and set to either 'australia' or 'japan'
let userLocation = 'Australia'
// Declare greeting variable, but don't set it
let greeting
// Declare greetingDefault variable and set to "Hello"
let greetingDefault = 'Hello'
// Declare greetingAustralia variable and set to "G'day"
let greetingAustralia = "G'day"
// Declare greetingJapan variable and set to "Konnichiwa"
let greetingJapan = 'Konnichiwa'
// If userLocation is 'australia'
if(userLocation == 'Australia') {
	// set greeting to greetingAustralia
    greeting = greetingAustralia
// Else if userLocation is 'japan'
} else if(userLocation == 'Japan') {
	// set greeting to greetingJapan
    greeting = greetingJapan
// Else
} else {
	// set greeting to greetingDefault
    greeting = greetingDefault
}
// Display greeting variable in console
console.log(greeting)