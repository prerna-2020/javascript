
let inputVal = document.getElementById('inputVal');
let errorBlck = document.getElementById('error');
let result ='';

let operands = ['+','/','-','*','%','='];

function appendInput(dispValue){

    let inputLength =  inputVal.value.length;

    try{
        if(inputLength==0 && operands.includes(dispValue) == true){  
            inputVal.value = '';
            throw new Error("Invalid input");     
            
        }else{
        
            if(dispValue === '='){
                result = eval(inputVal.value);
                if(result!==  Infinity && !isNaN(result))
                    inputVal.value = result
                else 
                    throw new Error("Can't divide by zero");
            }
            else{
                //Remove leading zeros
                if (/^0[0-9]/.test(inputVal.value)) {
                    inputVal.value = inputVal.value.replace(/^0+/, '');
                }
                inputVal.value += dispValue;
            }
            errorBlck.style.display = 'none';
            errorBlck.innerHTML ='';
        }  
    }  
    catch(err){
            
            errorBlck.innerHTML = err.message;
            errorBlck.style.display = 'inline-block';
            inputVal.value = '';
    } 
}

function clearInput(){
    inputVal.value = "";
    result = 0;
}