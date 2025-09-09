//Delayed Logger

function delayedLog(msg,delay){
    return new Promise((resolve, reject)=>{
         setTimeout(()=>{console.log(`Message after ${delay}:: ${msg}`);resolve();}, delay);
    });
}

delayedLog("Hello I am Promise", 3000).then(()=>{
    console.log("resolved");
}).catch((err)=>{
    console.log("Rejected error:",err);
});


//Flip coin 
function flipCoin(){
    
    return new Promise((resolve, reject)=>{  
        let options =['Head', 'Tail']; 
        let random = Math.floor(Math.random()* 2);
        let selectedVal = options[random];

        if(selectedVal == 'Head'){
            resolve(selectedVal);
        }else{
            reject(selectedVal);
        }
    })   
}

flipCoin().then((val)=>{
    console.log("Resolved::", val)
}).catch((err)=>{
    console.log("Rejected::", err);
});

// fetch data from url
function mockFetch(url){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            fetch(url).then((response)=>{
                if(response.status === 200){
                    return response = response.json();                    
                }else{
                    throw new Error ("HTTP error", response.status);
                }
            }).then((res)=>{
                resolve(res);
            }).catch((error)=>{
                reject(error);
            })
        }, 2000);
    })
}

mockFetch('https://dummyjson.com/products').then((result)=>{
    console.log("data from resolved call::", result)
}).catch(err=>console.log(err));

//Currying example

function sum(a){
    return function(b){
        return function(c){
            return a+b+c;
        }
    }
}
console.log(sum(2)(3)(4));


//IIFE

(function(){
    console.log("I am IIFE(Immediately invoked function, self invoked function), function without name, called immediately on page load")
})();

//Event Propagation
document.getElementById('innerChild').addEventListener('click', function(e){
    // e.preventDefault();
    console.log("inner child clicked");
});
document.getElementById('child').addEventListener('click', function(e){
    console.log("Child clicked");
});
document.getElementById('parent').addEventListener('click', function(e){
    console.log("Parent clicked");
});

//Rest & Spread operator
const arr1 = [2,5,8,1,10, 13];
const arr2 =['fnjf', 'tima', 'riua'];
const arr3 = [...arr1, ...arr2] //spread operator

console.log("array 3:",arr3);

function sumArr([num1, num2, ...restVal]){ // rest operastor
    console.log(num1, num2, restVal);
}
sumArr(arr1);