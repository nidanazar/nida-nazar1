// // 41. Magicians: Make a array of magician’s names. Pass the array to a function
// // called show_magicians(), which prints the name of each magician in the array.
var magicians = ["DON", "Rameez", "chirs"];
function show_magicians(magician) {
    magicians.forEach(function (magician) {
        console.log(magician);
    });
}
show_magicians(magicians);
