console.log("Hello sakku");
//in -line command
/* this is multi-
line command
efr
*/

var a;
var b;
var c;
a = 10;
b = 20;
c = 100;
var d = a + b + c;
console.log(d);
var e = 11-d;
console.log(e);
var f = e * 10;
console.log(f);
var g = a /100;
console.log(g);

var aa = 100;
var quotient = aa/10;
var remainder = aa % 17;
console.log(quotient);
console.log(remainder);

c = " I am a super star";
console.log(c);
var d = " i am also a shining";
var r = c + d;
console.log(r);
// java script is case sensitive
var myName = 10;
var MYNAme = 100;
var sum = 0;
var sum1 = 0;
sum = sum + myName;
console.log(sum); 
sum1 = sum1 + MYNAme;
console.log(sum1); 

// constant literals
const pi = 3.14;

//increment

var increment = 0;
increment = increment + 1;
console.log(increment++);
console.log(increment);
var decrement = 10;
decrement = decrement - 1;
decrement--;

//decimal
var ourDecimal = 5.7;
var myDecimal = 0.0009;
var prodcut = ourDecimal * myDecimal;
console.log(prodcut);

//compound assignment

var a = 10;
a = a + 100;
a+=100;

//declare String

var firstName = "sakku";
var lastName = "Ram";
var myString = " I am a \"teacher\" " + firstName + " " + lastName + " at vanier";
console.log(myString);

var newString= "FirstLine\t\\SecondLine\tThirsLine";
console.log(newString);

//concatenate Strings

var ourStr = " I come first " + " I come second";
var newStr = "I am at Vanier";
newStr+=ourStr;

var newStrlength =0;
newStrlength = newStr.length;
console.log(newStrlength);

//accessing characters of a String

var myNewName = "Sakkaravarthi";
var myFirstCharater = myNewName[5];
console.log(myFirstCharater);
var myLastCharater = myNewName[myNewName.length-1];
console.log(myLastCharater);

//to find the n-th character from the last character
var myLastCharater = myNewName[myNewName.length-4];
console.log(myLastCharater);

// word Blanks using a function

function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
    var result = "";
    result= " The " + myAdjective + " " + myNoun + " " + myVerb + " " +
    myAdverb;
    return result;    
}

console.log (wordBlanks("dog","big","ran","quickly"));
console.log (wordBlanks("sakku"," teach","good"));

//store multiple values with arrays
 var ourArray = ["john",23];
 var myArray = [];
 console.log(ourArray[0]);
 console.log(ourArray[1]);
 
 //nested arrays
 var ourNestArray=[["sakku",10],["nir","bav"],[10,20]];
 console.log(ourNestArray[0]);
 console.log(ourNestArray[1][0]);
 
 var ourNestNestedArray=[["sakku",10],["nir","bav"],[[10,20,"vanier",100], 10, 1000]];
 console.log(ourNestArray[0]);
 console.log(ourNestArray[1][0]);
  console.log(ourNestNestedArray[2][0][2]);
  
  //modify the values of Arrays
  
  var anyArray=[50,50];
  anyArray[1]=100;
  console.log(anyArray);
  
  //can we modify the characters in Strings
  
  var myNewString = "Javascript";
 // myNewString[0]="S";
  myNewString = "python";
  console.log(myNewString);
  
  //array using Push()
  
  var myPushArray = ["Montreal","canada"];
  myPushArray.push("super","Quebec");
 // myPushArray.push["super","Quebec"];
  console.log(myPushArray);
  
  //Arrays using Pop
  
  var myPopArray = ["A","b","c"];
  console.log(myPopArray.pop());
  console.log(myPopArray.pop());
  console.log(myPopArray.pop());
  console.log(myPopArray.pop());
  
 //arrays with Shift
 
 var myShiftArray = ["AA","BB"];
 console.log(myShiftArray.shift());
 console.log(myShiftArray);
 
 //arrays with Unshift
 
 var myUnshiftArray = ["AAA","DDD"];
 myUnshiftArray.unshift("happy");
 console.log(myUnshiftArray);
 
 //functions
 
 function ourReuse() {
     console.log("Hey WOrld");
   
 }
 ourReuse();
 
 //functions with arguments
 function ourReuseAgruments(a,b) {
     var sum =0;
     sum = a + b;
     console.log(sum);
 }
 ourReuseAgruments(10,100);
 
 //functions with return
 
 function returnDemo (a,b,c) {
     var add = 0;
     add = a + b - c;
     return add;
 } 
  console.log(returnDemo(100,200,50));

//scope of variables, visibility of variable, Global/local variable

var myGlobal = 10;
function fun1() {
    var OopsGlobal = 100;
}
function fun2() {
    var output="";
    if(typeof myGlobal != "undefined") {
        output = "Myglobal value is " + myGlobal;
    }
    if(typeof OopsGlobal != "undefined") {
        output = "Myglobal value is " + myGlobal;
    }
    console.log(output);
}

fun2();

//DAY 2
 var global = 37;
// var localvar = 46;
 function vartest() {
    localvar = 46;
 }
 
 function vartest2() {
 var output="";
    if(typeof global != 37) {
        output = "Myglobal value is " + global;
    }
 /*  if(typeof localvar != 46) {
     output = "Myglobal value is " + localvar;
    } */
    console.log(output);
}

vartest2();

//local scope

function myLocal1() {
    var myVa = 5;
    console.log(myVa);
}
myLocal1();

//local and global

var outerWear = "T-shirt";
function shirt() {
    var outerWear = "Shirt";
    return outerWear;
}
console.log(shirt());
console.log(outerWear);

// return

function returnDemo(num) {
    return num-10;
} 
console.log(returnDemo(100));

// undefined value returned by a function
var sum = 0;
function addThree() {
    sum +=3;
    console.log(sum);
}
addThree();

var changed = 0;
function varchanged(num) {
    return (num+5)/3;
}
changed = varchanged(10);
console.log(changed);

// Queue

function nextInLine(arr, item) {
    arr.push(item);
    return arr.shift();
}

var testArray = [1,2,3,4,5];
console.log("Before :" + JSON.stringify(testArray));
console.log(nextInLine(testArray,6));
console.log("After :" + JSON.stringify(testArray));

//boolean values

function welcomeBoolean() {
    return false;
}

//logical IF statements
function ourTorF(isit) {
    if(isit) {
        return "yes, it is true";
    }
    return " no, it is not true";
}

console.log(ourTorF(true));

// else if

function ourTorF(isit) {
    if(isit) {
        return "yes, it is true";
    } else {
    return " no, it is not true"; }
}

console.log(ourTorF(true));

// write a program to check a number is even or odd

function evenOrOdd (num) {
    if(num %2== 0) {
        console.log("it is even");
        
    }
    else {
        console.log("it is odd");
    }
}

evenOrOdd(10);

//strict comparison

function demoStrictCompare(val) {
    if(val ===7) {
        return "the number is Equal"    
    }
    else {
        return " the number is different"
    }
}
console.log(demoStrictCompare('7'));

// comparing different values

function comparevalues(a, b) {
    if(a===b) {
        return "it is equal";
    }
    else {
        return "it is not equal";
    }
}
console.log(comparevalues(10,"10"));

// Inequality 
function inequalDemo(a,b) {
    if(a!=b) {
        return "a is not equal to b";
    }
    else {
        return "a is equal to b";
    }
}
console.log(inequalDemo(10,4));

//logical AND

function greaterThan(val) {
    if(val >10 && val < 100) {
        return " the num is between 10 and 100";
    }
       return " 10 or under";
}

console.log(greaterThan(180));

// logical OR operation

function greaterThan(val) {
    if(val > 10 || val < 100) {
        return " the num is between 10 and 100";
    }
       return " 10 or under";
}

console.log(greaterThan(180));

//less than or Equal

function testOfficial (val) {
    if(val<=50){
        if(val>=25) {
            return "between 25 and 50";
        }
}
 return "anything else";
}
console.log(testOfficial(70));

//Else if 
function testElseif(val) {
    var result="";
    if(val > 10) {
        return "Bigger than 10";
    }
    else if (val < 5) {
        return "smaller than 5";
    } else {
        return "betweem 5 and 10";
    } 
    return result;
    
}
console.log(testElseif(8));

   // logical order in Else if statements
    function testElseLogical(val) {
        if(val < 5) {
        return "less than 5";
    }
    else if (val < 10) {
        return "less than 10";
    } else {
        return "Greater than or Equal to 10";
    } 
      
}
console.log(testElseLogical(3));

//chaining else if
function reSize(num) {
    if(num < 5) {
        return "tiny";
    } else if (num < 10) {
        return "small";
    } else if (num < 15) {
        return "medium";
    }
    else if (num < 20) {
        return "large";
    } else {
        return " Huge";
    }
  }

console.log(reSize(2));

//Golf code

var names = ["hole-in-one", "Eagle", "Birdie", "Par", "Bogey", " Double Bogey", "Go Home"];
function golfScore(par, strokes) {
    if(strokes == 1) {
        return names[0];
    } else if (strokes == par-2) {
        return names[1];
    } else if (strokes == par-1) {
        return names[2]; 
    }
    else if (strokes == par) {
        return names[3];
    }
         else if (strokes == par+1) {
        return names[4];
        }
         else if (strokes == par+2) {
        return names[5];
        }
         else if (strokes == par+3) {
        return names[6];
        }
    }
    console.log(golfScore(3,5));
    
    // switch statments 
    
    function caseSwitchDemo(val) {
        var ans = "";
        switch(val) {
            case 1 :
                ans = "alpha";
                break;
            case 2:
                ans = " beta";
                break;
            case 3:
                ans = " gamma";
                break;
            case 4:
                ans = " Delta";
                break;
            default:
                ans = "undefined";
                break;
            }   
            return ans;       
    }
    console.log(caseSwitchDemo(1));
    
    // multiple case study
    function sequentialOrder(val) {
        var ans="";
        switch(val){
        case 1:
        case 2:
        case 3:
        ans = " low";
        break;
        case 4:
        case 5:
        case 6:
        ans = " Medium";
        break;
         case 7:
        case 8:
        case 9:
        ans = " Large";
        break;
        default:
        ans = " Huge";
        break;
      
    }
    return ans;
    }
    console.log(sequentialOrder(1));

// Third day
  // returning boolean values from functions
  
  function isLess(a, b) {
      if(a < b) {
          return true;
      }
      else {
          return false;
      }
  }  
  console.log(isLess(10,11));
  
  // rewrite the boolean return
  function isLessReal(a, b) {
     return a > b;
  }
  
  console.log(isLessReal(10,11)); 
    
// replacing IF ELSE CHAINS with SWITCH

function chainToSwitch(val) {
    var answer="";
    if(val === "bob") {
        answer = "Marley";
    } else if (val === 42) {
        answer = "the answer";
    } else if ( val ===1) {
        answer = "there is no #1";
    } else if (val === 99) {
        answer = "Missed me too much";
    } else if (val === 7) {
        answer = "Ate niner";
    }
    return answer;
}

console.log(chainToSwitch(99));

//RETURNING EARLY PATTERN FROM FUNCTIONS

function sakku(a,b) {
    if(a < 0 || b < 0) {
        return null;
    }
    
    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b),2));
}
console.log(sakku(2,-2));

// COUNTING CARDS

var count = 0;
function cc(card) {
    switch(card) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        count++;
        break;
        case 10:
        case "J":
        case "Q":
        case "K":
        case "A":
        count --;
        break;
    }
    var holdbet = "Hold";
    if(count > 0){
        holdbet = "Bet";
    }
    return count + " " + holdbet;
}
cc(2);cc("K");cc(10);cc("J");
console.log(cc(4));

//  BUILDING OBJECTS

var ourDog = {
    "name" : "camper", // properties :values
    "legs" : 4,
    "tails" : 1,
    "friends" : ["everything!"] // array
};

var myDog = {
    "name" : "Quincy", // properties :values
    "legs ss" : 3,
    "tails" : 2,
    "friends" : [] // array
};

//accessing Objects using DOT

var dogName = myDog.name;
var dogLegs = myDog.legs;
console.log(dogLegs);

// accessing Objects with Bracket Notation

var testObj = {
    "an entree" : "ham",
    "my sid" : "Veggies",
    "the drink" : "water"
    };
var testValue = testObj["an entree"];
console.log(testValue);
console.log(myDog);
var testSid = testObj['my sid'];

// accessing objects with variables
 var testObject = {
     12 : "Namah",
     16: " Montana",
     19 : " units"
     };
     
     var playerNymber = 16;
     var player = testObject[playerNymber];
     console.log(player);
     
     // update the object properties
     
     var myTestObject = {
         "name" : "Pomary ",
         "legs" : 5
     };
     
     myTestObject.legs = 4;
     console.log(myTestObject);

 // add new properties
 
 myTestObject.bark = "bow - bow";
 console.log(myTestObject);
 myTestObject.price = "Expensive";
 console.log(myTestObject);

// delete properties

delete myTestObject.legs;
console.log(myTestObject);

 //using Objects for Lookups
 
 function phonetcisLookUp (val) {
     var result="";
     var lookup = {
         "Alpha" : "Adams",
         "bravo" : "Boston",
         "charlie" : "Chicago",
         "Delta" : "Denver"
         };
         result = lookup[val];
         return result;
 }
 
 console.log(phonetcisLookUp("Deltaa"));
 
  var lookup = {
         "Alpha" : "Adams",
         "bravo" : "Boston",
         "charlie" : "Chicago",
         "Delta" : "Denver"
         };
 function checkforProp(checkP) {
 if(lookup.hasOwnProperty(checkP)) {
     return lookup[checkP];
 } else {
     return " Not Found";
 }
}

console.log(checkforProp("Delta"));

// Manipulating complex objects
// start with three dimensional arrays

var threeDimension = [["sakku", 2, -10],["nir","bav",100,["vanier","montreal"]],[999,66]];

var data = threeDimension[1][3][1];
console.log(data);

// MANIPULATING COMPLEX OBJECTS

var myMusic = [
    {
        "artist":"Billy Joel",
        "title":"Piano man",
        "release_year":1973,
        "formats":[
            "CD",
            "LP",
            "gt"],
        "gold":true      
    },
      {"artist":"Wild wild west",
        "title":"Great tour",
        "release_year":2003,
        "formats":[
            "youtube"]
            }
        ];
        
        // Accessing Nested Objects
        
        var myStorage = {
            "car" : {
                "inside": {
                    "glove box" : "maps",
                    "passenger seat":"crumbs",
                    "seat":4
                },
                "outside" : {
                    "trunk":"jack"
                }
            }
        };
            
            var gloveBoXContent = myStorage.car.inside["glove box"];
            console.log(gloveBoXContent);
            
// Accessing Nested Arrays

var myPlants = [
    {
    type:"flowers",
    list:[
        "rose",
        "tulips",
        "dandelion"
    ]
},
    {
     type: "trees",
     list:[
         "fir",
         "pine",
         "birch"
     ]   
}
];

console.log(myPlants[1].list[1]);

// RECORD COLLECTION
var collection = {
    "2458": {
        "album":"slippery when wet",
        "artist": " bin jovi",
        "tracks": [
            "let it rock",
            "you are the best"
        ]
    },
       "2468": {
        "album":"1999",
        "artist": "Prince",
        "tracks":[]
       
    },
      "1245": {
       "artist": "Robert Palmer",
        "tracks":"q"
    },
     "5439": {
       "album": "AA Gold"
    }
};

collection[5439].album="sakkaravarthi";
console.log(collection);

var collectionCopy = JSON.parse(JSON.stringify(collection)); // back up copy
function updateRecords(id,prop,value) {
    if(value === "") {
        delete collection[id][prop];
    } else if (prop === "tracks") {
       collection[id][prop]= collection[id][prop] || []; // if tracks prop is empty, we have to create one
        collection[id][prop].push(value);
    } else {
        collection[id][prop]= value;
    }
    return collection;

}
updateRecords(2468,"tracks","testingMyself");
console.log(collection);
updateRecords(5439,"artist","ABBBA")
//console.log(collectionCopy);
console.log(collection);

// WHILE
 var myarry = [];
 var i = 1;
 while( i < 10) {
     myarry.push(i);
     i = i + 2;
 }
 console.log(myarry);
 
 // for Loops
 
 var forArray = [];
 for(var i = 0; i < 6; i++) {
     forArray.push(i);
 }
 console.log(forArray);
 
 // calculate the total of Array values
 var total = 0;
 for (var i = 0; i < forArray.length; i ++) {
     total += forArray[i];
 }
 console.log(total);
 
 //nesting for loops
 function multiArray(arr) {
     var product = 1;
     for(var i = 0; i < arr.length ; i ++) {
         for (var j = 0; j <= arr[i].length; j ++) {
             product *= arr[i][j];
         }
     }
     return product;
 }
 var values = multiArray([[1,2],[3,4],[5,1,7]]);
 console.log(values);
 
 
 // do while
 var myA =[];
 var i = 10;
  do {
      myA.push(i);
      i++;
  }while (i < 5);
  console.log(myA);
  
  // profile lookups
  
  var contacts = [
      {
          "firstname":"Akira",
          "lastname":"laine",
          "number":"3325",
          "likes":["pizza","coding","Brownie"]
      },
        {
          "firstname":"Harry",
          "lastname":"Potter",
          "number":"3325666",
          "likes":["Hogwarts","Magic","Hagrid"]
      },
        {
          "firstname":"Sherlock",
          "lastname":"Holmes",
          "number":"9999",
          "likes":["Intruguing cases","violin"]
      },
        {
          "firstname":"Kristian",
          "lastname":"vos",
          "number":"unknown",
          "likes":["Javascript","AI","Travel"]
      } ];
      
      function lookUpProfile (name, prop) {
          for (var i = 0 ; i < contacts.length; i++)  {
              if(contacts[i].firstname === name) {
                  return contacts [i][prop] || " No Such property";
              }
          }
          return "no Such contact";
      }
    var data = lookUpProfile("sakku","likes");
    console.log(data);

// generate random numbers

function randomFraction() {
    return Math.random();
}
console.log(randomFraction());

// generate random whole numbers

var randomNumberBetween0and19 = Math.floor(Math.random() * 20);
console.log(randomNumberBetween0and19);

function randomNumberBetween0to9(){
    return Math.floor(Math.random() * 10);
}

console.log(randomNumberBetween0to9());


// generate random numbers between the range

function ourRandomRange(min,max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
console.log(ourRandomRange(100,110));

//use ParseInt
function convertToInt(str) {
    return parseInt(str);
}
console.log(convertToInt("56"));

// parseInt with Radix, 
function convertToInt1(str) {
    return parseInt(str,2);
}
console.log(convertToInt1("100"));

// ternary operator

function checkEqual(a,b) {
    return a===b ? true:false;
}
console.log(checkEqual(10,10));

//multiple ternary

function checkSign(num){
    return num > 0 ? "positive" : num < 0 ? " Negative" : "Zero";
}
console.log(checkSign(1));

//new variable called LET

let catName= "quincy";
let quote;
// let catName = "KAT"; // let does not allow you to duplicate declaration

function catTalk() {
    catName = "nnn";
    quote = catName + "says YES";
    return quote;
}

// compare the scope of var and let

function checkScope() {
    "use Strict";
    let i = "function scope";
    if(true){
        let i = "block scope";
        console.log("block scope is :", i);
}
    console.log("Function scope is : ", i);
    return i;
}
console.log(checkScope());


function checkScope1() {
    "use Strict";
    let i = "function scope";
    if(true){
        let i = "block scope";
        console.log("block scope is :", i);
}
    console.log("Function scope is : ", i);
    return i;
}

console.log(checkScope1());

// declare a read-only variable  with the Const keyword, you can not reassing a const
function printManyTimes(str){
    "use Strict";
    const sentence = str + "is cool";
  //  sentence = str = " is amazing";
    for (let i = 0; i < str.length; i+=2) {
        console.log(sentence);
    }
}
printManyTimes("vanier");

//mutate an array with Const

const s = [7,5,2];
function editPlace(){
    "use Strict";
   // s = [4,3,2];
   s[0]= 4;
   s[1]= 4;
   s[2]= 4;
}
editPlace();
console.log(s);

//freeze the Object

function freezeObj (){
    "use Strict";
    const MATH_CONSTANTS = {
        PI:3.14
    };
  Object.freeze(MATH_CONSTANTS);
    try {
        MATH_CONSTANTS.PI = 99;
    } catch (ex) {
        console.log(ex);
    }
    return MATH_CONSTANTS.PI;
}

const PI = freezeObj();
console.log(PI);

//use Arrow functions to write Concis Anonymous functions
var magic = function () {
    return new Date();
}
console.log(magic());

var magic1 = () => new Date();
console.log(magic1());

//anonymous functions with arguments

var myConcat = function (arr1,arr2) {
    return arr1.concat(arr2);
}

console.log(myConcat([1,2],[3,4,5]));

var myConcat1 = (arr1,arr2) => arr1.concat(arr2);
console.log(myConcat1([1,2,444],[3,4,5]));

//write higher arrow functions

const realNumberArray = [4,4.5,-9,3.14,42,8.34,-2];
const squareList = (arr) => {
    const squareIntegers = arr.filter(num => Number.isInteger(num) && num > 0).map (x => x * x);
    return squareIntegers;
}
const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);



