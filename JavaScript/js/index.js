var company = "Neosoft Technology"
console.log(company);
const len = company.length;
console.log(len);

const char = company.charAt(5);
console.log(char);
var lower =company.toLocaleLowerCase();
console.log(lower);
console.log(company.toLocaleLowerCase());
console.log(company);

var sub1 = company.substring(3,9);
console.log(sub1);

sub1 = company.substring(9,3);//lower value considerable.
console.log(sub1);

sub1 = company.substring(-3, 10); //-ve not supported consider as 0
console.log(sub1);//empty string

sub1 = company.substring(3); //3, end : end of the original string
console.log(sub1);    

console.log("............")


var sub2 = company.slice(2,8)
console.log(sub2);
sub2 = company.slice(9,2);
console.log(sub2);//empty string
sub2 =company.slice(-9,-3 );
console.log(sub2);//it works with -ve value
sub2 = company.slice(-10, 12);
console.log(sub2);

console.log("--------------");

var sub3 = company.substr(3, 9);
console.log(sub3);
sub3 = company.substr(-8,4);
console.log(sub3);

console.log("___________________");

const array = company.split(" ");
console.log(array);
const array2 = company.split(" ", 1);
console.log(array2);
const array3 = company.split("e");
console.log(array3);
const array4 = company.split("e", 2);
console.log(array4);

var cities = ["Nagpur", "Pune", "Mumbai", "Amravati", "Nashik"];
cities.push("Nanded");
cities.pop("Thane");
cities.unshift("Nagpur");
cities.shift("Mumbai");
cities.reverse();
console.log(cities);

var salaries = [20000, 30000, 40000, 50000, 60000];
var mixed = ["Shubham", 450000, 123.45, true, 'neosoft'];
var names = new Array(5); //empty array with  initial size 5
// for (var i = 0; i<names.length; i++){
//     names[i]=prompt("Enter Here");
// }//end for
console.log(names);

var agearray= new Array(23);
console.log(agearray);
var agearray1 = new Array(23, 12, 35, 45, 87, 57);
console.log(agearray1);

var newArray =  agearray