//Q3.: Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
var personName1 = "Nida";
//lower case
console.log("lowercase:", personName1.toLowerCase());
//upper case
console.log("uppercase:", personName1.toLocaleUpperCase());
//title case
console.log("titlecase:", personName1.replace(/\bw/g, function (c) { return c.toUpperCase(); }));
