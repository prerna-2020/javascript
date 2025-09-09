//Find value at index

let myString = "microsoft is very popular now a days  now in microsoft world .";
console.log("original string::",myString);
console.log("find value at index 3", myString.charAt(3));
console.log("code of charcter i", myString.charCodeAt('i'));
console.log("last index of f:", myString.lastIndexOf('f'));

//length
console.log("Length : ", myString.length);

//Replace in string
console.log("replace microsoft with gemini::",myString.replace('microsoft', 'gemini'));
console.log("replace all microsoft with gemini::",myString.replaceAll('microsoft', 'gemini'));

//convert to array
console.log("converted to array::",myString.split(''));

//search substring in string
console.log("search for 'now' returns index::",myString.search('now'));
console.log("search using 'include'::", myString.includes('very'));

//concat two strings
let string2 = "some new string value";
let newString = myString.concat(string2);
console.log("concatination::", newString);

//formatting a string
console.log("lowercase::",myString.toLowerCase());
console.log("uppercase::", myString.toUpperCase());

//Substring methods
console.log("slice(3,9)::", myString.slice(3,9));
console.log("slice(-13,-9)::", myString.slice(-13,-9));
console.log("substring()::", myString.substring(2,14));

//Trim white spaces
const newStr = "         ebdhjfb          ";
console.log("trim ", newStr.trim());
console.log("trim start", newStr.trimStart());
console.log("trim end", newStr.trimEnd());

//Reverse a string
const reverseStr = myString.split('').reverse().join('');
console.log("reversea a string built in methods::", reverseStr);


//without built in methods
const reverseString=[];
for (let i=myString.length;i>0;i--){
    reverseString.push(myString[i]);
}
console.log("Reverse a string without built in method::", reverseString.join('').toString());


//Closure example

function outerfunction(){

    let count = 0;
    function innerfun(){        
        count++;
        console.log("Count in inner function::", count);
    }

    return innerfun;

}

const newfun  = outerfunction();
newfun();
newfun();