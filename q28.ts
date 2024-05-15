// 28. Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
// • If the person is less than 2 years old, print a message that the person is a baby.
var age = 70;
if (age < 2) {
    console.log("the person is a baby."); // if real age is 1.5 
}
// • If the person is at least 2 years old but less than 4,print a message that the person is a toddler.
else if (age >= 2 && age < 4) {
    console.log("the person is a toddler."); // if real age is 3
}
// • If the person is at least 4 years old but less than 13, print a message that the person is a kid.
else if (age >= 4 && age < 13) {
    console.log("the person is a kid."); // if real age is 9
}
// • If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
else if (age >= 13 && age < 20) {
    console.log("the person is a teenager."); //if real age is 18
}
// • If the person is at least 20 years old but less than 65, print a message that the person is an adult.
else if (age >= 20 && age < 65) {
    console.log("the person is a adult."); // if real age is 25
}
// • If the person is age 65 or older, print a message that the person is an elder.
else {
    console.log("the person is a elder.");
}
