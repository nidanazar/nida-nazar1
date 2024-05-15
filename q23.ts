// Q23. Conditional Tests: Write a series of conditional tests. Print a statement
// describing each test and your prediction for the results of each test. Your code
// should look something like this:
// let car = 'subaru';
// console.log("Is car == 'subaru'? I predict True.")
// console.log(car == 'subaru')
// • Look closely at your results, and make sure you understand why each line evaluates to True or False.
// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
//test.1 equlitey == (true)

let car7 = `subaru`;

console.log("Is car == `subaru`? I predict True.");
console.log(car7 == `subaru`); 

//test.2 strict equlity ===(true)
console.log("Is car === `subaru`? I predict True.");
console.log(car7 === `subaru`); 

//test.3 inequlitey !=(false)
console.log("Is car != `subaru`? I predict false.");
console.log(car7 != `subaru`); 

//test.4  strict inequlitey !==(false)
console.log("Is car !== `subaru`? I predict false.");
console.log(car7 !== `subaru`); 

//test.5 less than < (false)
console.log("Is car < `subaru`? I predict false.");
console.log(car7 < `subaru`); 

//test.6 greater than > (false)
console.log("Is car > `subaru`? I predict false.");
console.log(car7 > `subaru`); 

//test.7 less than and equal <=(true)
console.log("Is car <= `subaru`? I predict True.");
console.log(car7 <= `subaru`);

//test.8 greater than and equal >=(true)
console.log("Is car >= `subaru`? I predict True.");
console.log(car7 >= `subaru`);

//test.9 chaking true (true)
console.log("Is car? I predict True.");
console.log(car7);

//test.10 chaking false ! (false)
console.log("Is car? I predict False.");
console.log(!car7);




