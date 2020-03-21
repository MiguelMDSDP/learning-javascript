var name = window.prompt("What's your name?");
document.write(`<h1>Hello, ${name}!</h1>`)
document.write(`<p>You name have ${name.length} characters.</p>`);
document.write(`<p>Upper casing you name: ${name.toUpperCase()}</p>`)
document.write(`<p>Lower casing you name: ${name.toLowerCase()}\n</p>`)

var number1 = Number(window.prompt("Enter a number:"));
var number2 = Number(window.prompt("Enter another number:"));
var result = number1 + number2
document.write(`<p>The sum between ${number1} and ${number2} is ${result}!</p>`);