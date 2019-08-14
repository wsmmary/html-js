console.log("Hello from JavaScript");
//comment line
/* multipule comment lines
comment lines
*/
var a;
var b;
var c;
a=10;
b=20;
c=100;
var d=a+b+c;
console.log(d);
var e=11-d;
console.log(e);
var f=e*10;
console.log(f);
var g=a/100;
console.log(g);

var aa=100;
var quotient=aa/10;
var remainder=aa%17;
console.log(quotient);
console.log(remainder);

c="I am a super star"
console.log(c);
var d=" I am also a shining"
var r=c+d;
console.log(r);
var myName=10;
var MYNAme=100;
var sum=0;
var sum1=0;
sum=sum+myName;
console.log(sum);
sum1=sum1+MYNAme;
console.log(sum1);

const pi=3.14;
var increment=0;
increment=increment+1;
console.log(increment++);
console.log(increment);

var decrement=10;
decrement=decrement-1;
decrement--;

var ourDecimal =5.7;
var myDecimal=0.0000;
var product=ourDecimal*myDecimal;
console.log(product);

var a=10;
a=a+100;
a+=100;
console.log(a);

var firstName="sakku";
var lastName="Ram";

var myString="I am a \"student\" "+firstName+" "+lastName+" at vanier";
console.log(myString);

var newString="First Line \\n Second Line \\n Third Line";
console.log(newString);

//concatenate strings
var ourStr="I come first "+" I come second";
var newStr="I am at Vanier";
newStr+=ourStr;

var newStrlength=0;
newStrlength=newStr.length;
console.log(newStrlength);

//accessing characters of a string
var myNewName="sakkaravarthi";
var myFirstCharacter=myNewName[5];
console.log(myFirstCharacter);
var myLastCharacter=myNewName[myNewName.length-1];
console.log(myLastCharacter);

var myLastCharacter=myNewName[myNewName.length-4];
console.log(myLastCharacter);

function wordBlank(myNoun,myAdjective,myVerb,myAdverb){
    var result="";
    result+=" The "+myAdjective+" "+myNoun+" "+myVerb+" "+myAdverb;
    return result;
    
}

console.log(wordBlank("dog","big","ran","quickly"));

//store multiple values with arrays
var ourArray=["john",23];
var myArray=[];
console.log(ourArray[0]);
console.log(myArray[1]);

//nested arrays
var ourNestArray=[["sakku",10],["nir","bav"],[10,20]];
console.log(ourNestArray[0]);
console.log(ourNestArray[1][0]);

var ourNestArray=[["sakku",10],["nir","bav"],[[10,20,"vanier",100],10],100];
console.log(ourNestArray[0]);
console.log(ourNestArray[1][0]);
console.log(ourNestArray[2][0][2]);

//modify the values of Arrays
var anyArray=[50,50];
anyArray[1]=100;
console.log(anyArray)

//can we modify the characters in strings
var myNewString="Javascript";
myNewString="python";
console.log(myNewString);

//array using Push()
var myPushArray=["Montreal","canada"];
myPushArray.push(["super","quebec"]);
console.log(myPushArray);

//Arrays using pop
var myPopArray=["A","B","c"];
console.log(myPopArray.pop());
console.log(myPopArray.pop());
console.log(myPopArray.pop());
console.log(myPopArray.pop());

//arrays with shift
var myShiftArray=["AA","BB"];
console.log(myShiftArray.shift());
console.log(myShiftArray);

//arrays with unshift
var myUnshiftArray=["AAA","ddd"];
myUnshiftArray.unshift("happy");
console.log(myUnshiftArray);

//function
function ourReuse(){
    console.log("Hey World");
    
}
ourReuse();

//function with arguments
var test="666";
function ourReuseArguments(a,b){
    var sum=0;
    sum=a+b;
    console.log(test);   
    console.log(sum);   
}
ourReuseArguments(10,100);

//function with return 
function returnDemo(a,b,c){
    var add=0;
    add=a+b-c;
    return add;
}
console.log(returnDemo(100,200,50));

//scope of variables,visibility of variable,Global/local variable
var myGlobal=10;
function fun1(){
    var OopsGlobal=100;
}
function fun2(){
    var output="";
    var output1="";
    if(typeof myGlobal!="undefined"){
        output="Myglobal value is "+myGlobal; 
    }
    if(typeof OopsGlobal=="undefined"){
        output1="The OopsGlobal is undefined";
    }
    console.log(output);
    console.log(output1);
}
fun2();