//Temperature Conversion

let optnList = document.querySelectorAll("input[type=radio]");

let btn = document.getElementById("submit");

let displayResult = document.getElementById('result');

let selectedVal;


optnList.forEach(item=>{
    item.addEventListener('click', ()=>{
        if(item.checked === true){
            selectedVal = item.value
        }
        displayResult.textContent = "";
    })
})

btn.addEventListener('click',()=>{

    let inputVal = document.getElementById("tempInput").value.trim();
    
   if(inputVal && selectedVal){
        
        switch(selectedVal){
            case 'toFahrenheit' : 
                console.log("convert to fahrehheit", inputVal)
                inputVal = ((inputVal * (9/5)) + 32 ).toFixed(2) + "\u00B0F";
                break;
            
            case 'toCelsius' :
                console.log("convert to celsius", inputVal);
                inputVal = ((inputVal-32)*(5/9)).toFixed(2) +  "\u00B0C";
                break;
            default : inputVal = "Please select atleast one option";
                break;
        }
   }else if(!selectedVal){
    inputVal = "Please select atleast one option"
   }else{
    inputVal = "Please enter value to convert";
   }
    displayResult.textContent = inputVal;
})