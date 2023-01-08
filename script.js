// // // Question 1 : Check if Two JSON have same properties
let obj1 = { name: "Person 1", age:5};
let obj2 = { age:5, name: "Person 1"};
let keys1 = Object.keys(obj1);
let keys2 = Object.keys(obj2);
let flag = -1;
if(keys1.length === keys2.length) {
   for(i = 0; i < keys1.length; i++){
       if( ! keys2.includes(keys1[i]) ) {
        flag = false;
        break;
       }
           
   }
}
else 
flag = false;
if(flag)
console.log("Two JSON have same properties");
else
console.log("Two JSON do not have same properties");
// // //Output : Two JSON have same properties


// // Question 2 :  Display all the country flags from REST API

console.log("Function display_flag() to display Country flags");
var request = new XMLHttpRequest();
var method = 'GET';
var api = "https://restcountries.com/v3.1/all";
request.open(method,api);
request.send();
function display_flag(){
    var data = request.response; // string
     var obj = JSON.parse(data); // object
     console.log("COUNTRY NAMES ", '-'.repeat(30), "FLAGS");
     console.log('='.repeat(70));
     for(let i of obj){
        console.log( i["name"]["common"].toUpperCase(), '-'.repeat(20), i["flags"]["png"]);
     } 
    }

// // Output : (task4 Q2 output image attached in repository)
// // Function response_check() to display Country flags
// // index.html:40 Live reload enabled.
// // response_check()
// // script.js:11 COUNTRY NAMES  ------------------------------ FLAGS
// // script.js:12 ======================================================================
// // script.js:14 SAINT VINCENT AND THE GRENADINES -------------------- https://flagcdn.com/w320/vc.png
// // script.js:14 FRENCH GUIANA -------------------- https://flagcdn.com/w320/gf.png
// // script.js:14 FAROE ISLANDS -------------------- https://flagcdn.com/w320/fo.png
// // script.js:14 PAKISTAN -------------------- https://flagcdn.com/w320/pk.png
// // script.js:14 FIJI -------------------- https://flagcdn.com/w320/fj.png




// // // Question 3 :  Display all the country names, region, sub-region, population

console.log("Function display_country() to display Country name, Region, Subregion, Population");
var request = new XMLHttpRequest();
var method = 'GET';
var api = "https://restcountries.com/v3.1/all";
request.open(method,api);
request.send();
function display_country(){
    var data = request.response; // string
     var obj = JSON.parse(data); // object
     console.log("COUNTRY NAMES ", '-'.repeat(20), "REGION",'-'.repeat(15), "SUB-REGION",'-'.repeat(15),"POPULATION");
     console.log('='.repeat(120));
     for(let i of obj){
        console.log( i["name"]["common"].toUpperCase(), '-'.repeat(15), i["region"], '-'.repeat(15), i["subregion"], 
                    '-'.repeat(15), i["population"]);
    } 
}
//     //OUTPUT : (task4 Q3 output image attached in repository)
//     // Function response_check() to display Country name, Region, Subregion, Population
//     // response_check()
//     // script.js:63 COUNTRY NAMES  -------------------- REGION --------------- SUB-REGION --------------- POPULATION
//     // script.js:64 ========================================================================================================================
//     // script.js:66 SAINT VINCENT AND THE GRENADINES --------------- Americas --------------- Caribbean --------------- 110947
//     // script.js:66 FRENCH GUIANA --------------- Americas --------------- South America --------------- 254541
//     // script.js:66 FAROE ISLANDS --------------- Europe --------------- Northern Europe --------------- 48865
//     // script.js:66 PAKISTAN --------------- Asia --------------- Southern Asia --------------- 220892331
//     // script.js:66 FIJI --------------- Oceania --------------- Melanesia --------------- 896444
//     // script.js:66 MONGOLIA --------------- Asia --------------- Eastern Asia --------------- 3278292