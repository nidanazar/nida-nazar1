// // // 42. Great Magicians: Start with a copy of your program from Exercise 41.
// // // Write a function called make_great() that modifies the array of magicians by adding
// // // the phrase the Great to each magician’s name. Call show_magicians() to
// // // see that the list has actually been modified.
var magicians = ["DON", "Rameez", "chirs"];
function make_great1(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + " the Great";
    }
}
make_great1(magicians);
console.log(magicians);
