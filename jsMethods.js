//sorting Array elements

const array = ['banana', 'apple', 'kiwi', 'orange', 'dragon fruit', 'avacado'];
console.log(array.reverse());
console.log(array.sort());


// find element in array using index
console.log("element at index 5:",array.at(5));
//concat values
let concatArray = array.concat("leaf");
console.log("array after concat::",concatArray, array);

//delete a value from end using pop
const delArr = array.pop(); // deleted value
console.log("deleted one value from end",array);

//Insert a value  in end in array
array.push('grapes');
console.log("added one value at end",array);

//insert value in start of array
array.unshift("dates");
console.log("add value in begining",array);

//deleting value fron beginning
array.shift();
console.log("removing value from beginning",array);

//insert values at particular loction
array.splice(2,0,"melon","fig");
console.log("add values in particular location without removing any value:",array);
array.splice(2,3,"watermelon","plum");
console.log("add values in particular location withremoving 3 value:",array)

//remove a part of array
const removeArr = array.slice(2,5);
console.log("Removed values::",removeArr, "Original array::",array);

//find values inn array
console.log("Find a value in array ",array.includes('orange'));

// convert to string
console.log("convert to string :: ", array.toString());

//delete values
delete array[4];
console.log("deleeted value from index 4",array);


// numeric array
const array2 = [66, 56, 87, 99, 100, 34, 22, 58 , 47, 83];
//First approach : Ascending
array2.sort((a,b)=> {return a-b;});

//Descending
array2.sort((a,b)=> {return b-a;});

console.log("sorted array using sort method::",array2); 
console.log("maximum value from array using Math.max:",Math.max(...array2));
console.log("math.min:", Math.min(...array2));

// second approach bubble sort method , comparing adjacent values
const array3 = [66, 56, 87, 99, 100, 34, 22, 58 , 47, 83];
for (let i=0; i<array3.length;i++){
    for(let j=0;j<array3.length;j++){
         if(array3[j]>array3[j+1])
         {
            [array3[j],array3[j+1]] = [array3[j+1], array3[j]];
         }
    }
}
// array reverse
console.log("Sorted using bubble sort",array3, "Rverse array using reverse method",array3.reverse());

//array element double values
const newArray = array3.map((item) =>item*item);
console.log("double array elements",newArray);



