function add(...nums) {
    return  (nums.reduce((sum, num) => sum + num, 0))
}

function subtract(a,...nums) {
    return (a - nums.reduce((sum, num) => sum + num, 0))
}

function multiply(...nums) {
    return (nums.reduce((sum, num) => sum * num, 1))
}

function divide(...nums) {
    return ((nums.reduce((sum, num) => sum / num)))
}


function operate(operator, num1, num2) {
    if (operator === "+") {
        let sum = add(num1,num2);
        return sum; 
    }
}

const oneClicked = document.getElementById("one");
const twoClicked = document.getElementById("two");

let storedNumber = ""; 


let operateTest = operate("+",1,2); 




let allDivs = container.children; 



let arrayForInputs = [];
let numberEntered ="";
let stringToShow="";
let number1 = ""; 

document.body.addEventListener("keypress", function onEvent(event) {
    if (event.key === "1") {
        document.getElementById("display").innerText = "1";
        storedNumber = "1"; 
        console.log(storedNumber);
    }
    
});



// Looping through all divs and adding listener to change display when a button is clicked
for (const div of allDivs) {
    div.addEventListener("click", function() {
        // Showing more than one digit at a time in display
        numberEntered = parseInt(div.textContent);
        arrayForInputs.push(numberEntered); 
        stringToShow = arrayForInputs.join(''); 
        document.getElementById("display").innerText = stringToShow;
        number1 = parseInt(stringToShow);
        console.log(typeof(number1));
       
       
    }); 
  }



  
  // While a specific button is not clicked the new value should be added to the array. 
  

 
  


