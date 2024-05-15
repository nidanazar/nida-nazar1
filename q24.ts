//Q24. More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
//• Tests for equality and inequality with strings
//• Tests using the lower case function
//• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
//• Tests using "and" and "or" operators
//• Test whether an item is in a array
//• Test whether an item is not in a array

// test1:  for equlitey and inequlitey === / !==
const string1:string = "hello"
const string2:string = "world"

console.log(string1 === string2); //false 
console.log(string1 !== string2);//true

//test2: lowercase ===
const upperCase : string ="HELLO";
const LlowerCase : string ="hello";

console.log(upperCase.toLowerCase() === LlowerCase); //true

// test3: numarical test === /!==/</>
const number1 : number = 10;
const number2 : number = 20;

console.log(number1 === number2); //false
console.log(number1 !== number2); //true
console.log(number1 > number2);   //false
console.log(number1 < number2);   //true

// test4: using "or" and "and" oprator &&/||/</>
const x : number = 10;
const y : number = 20;
const z : number = 30;

console.log( x < y && y <z );  //true
console.log(x > y || y < z );   //true

//test5: array!==
 const array1: number[] =[1, 2, 3, 4, 5, 6];
 const itemToFind : number =3;

 console.log( array1.indexOf(itemToFind) !== -1 );   //true

 //test6: item is not array===
 console.log(array1.indexOf(10) === -1 );   //true) 
