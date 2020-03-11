const prompt= require("prompt-sync")(); // required if code contains user input
let name=prompt("username")
console.log(name)
console.log('Hello world'); // This is my first JS code
 name='Mosh';
console.log(name);
let firstName='Mosh';
let interestRate = 0.3;
console.log(interestRate);
console.log(name);

let person={
    name:"Mosh",
    age: 30
}
person.name="merry"
person["name"]
console.log(person.name)
let selecte=["red","blue"]
selecte[2]='green'
console.log(selecte)
function greet(name){
    console.log('Hello'+ name);
}
greet("john")