// Fetching HTML input  and error block
let inputVal = document.getElementById("inputVal");
let errorBlck = document.getElementById("error");
let result = "";

// Defined operands used
let operands = ["+", "/", "-", "*", "%", "="];

// Appending values in calculator display and performing operations
function appendInput(dispValue) {
  //Calculator display value
  let inputLength = inputVal.value.length;

  try {
    if (inputLength == 0 && operands.includes(dispValue) == true) {
      // if any operand entered or 0 throw error
      inputVal.value = "";
      throw new Error("Invalid input");
    } else {
      if (dispValue === "=") {
        result = eval(inputVal.value);
        // if result infinity or not a number throw error
        if (result !== Infinity && !isNaN(result)) inputVal.value = result;
        else throw new Error("Can't divide by zero");
      } else {
        //Remove leading zeros
        if (/^0[0-9]/.test(inputVal.value)) {
          inputVal.value = inputVal.value.replace(/^0+/, "");
        }
        inputVal.value += dispValue;
      }
      errorBlck.style.display = "none";
      errorBlck.innerHTML = "";
    }
  } catch (err) {
    // display errors
    errorBlck.innerHTML = err.message;
    errorBlck.style.display = "inline-block";
    inputVal.value = "";
  }
}

// Function for clearing calculator display

function clearInput() {
  inputVal.value = "";
  result = 0;
}
