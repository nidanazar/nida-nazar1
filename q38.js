// 38. Cities: Write a function called describe_city() that accepts the name of
// a city and its country. The function should print a simple sentence, such as
// Karachi is in Pakistan. Give the parameter for the country a default value.
// Call your function for three different cities, at least one of which is not in the
// default country.
function describe_city(nameOfCity, country) {
    if (country === void 0) { country = "Pakistan."; }
    return "".concat(nameOfCity, " is in ").concat(country);
}
;
var city1 = describe_city("Karachi");
var city2 = describe_city("Dhli", "India");
var city3 = describe_city("Dubai", "UAE");
var city4 = describe_city("Panjab");
console.log(city1);
console.log(city2);
console.log(city3);
console.log(city4);
// function describe_city(city:string, country:string = "pakistan"){
//     console.log(`${city} is in ${country}.`);
// }
// describe_city("karachi");
// describe_city("Lahore");
// describe_city("tokyo", "japan");
