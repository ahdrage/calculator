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




let number1 = ""; 

/* document.body.addEventListener("keypress", function onEvent(event) {
    if (event.key === "1") {
        document.getElementById("display").innerText = "1";
        storedNumber = "1"; 
        console.log(storedNumber);
    }
    
}); */

// Using two different arrays to make calculation easier
let arrayForDisplay = [];
let arrayForCalc = [];

let numberEntered = "";
let stringForDisplay = "";
let stringForCalc = ""; 
let num1 =""; 

let classTest = ""; 

const divTest = document.getElementById('minus'); 
console.log(divTest.classList.contains('operator'));
console.log(divTest.classList); 


// Looping through all divs and adding listener to change display when a button is clicked
for (const div of allDivs) {
    div.addEventListener("click", function() {
        // Showing more than one digit at a time in display
        numberEntered = div.innerText;
        arrayForDisplay.push(numberEntered); 
        arrayForCalc.push(numberEntered);

        stringForDisplay = arrayForDisplay.join(''); 
        stringForCalc = arrayForCalc.join(''); 

        document.getElementById("lower").innerText = stringForDisplay;

        if (numberEntered === "+") {
            // Removing + operator from array
            arrayForDisplay.pop(); 
            stringForDisplay = arrayForDisplay.join(''); 
            num1 = parseInt(stringForDisplay); 
            document.getElementById("upper").innerText = stringForDisplay;
            document.getElementById("lower").innerText = "+  ";
            console.log(stringForDisplay);
            console.log(num1);

            let num2 = 15; 

            if (numberEntered === "=") {
                let sums = add(num1, num2); 
                console.log(sums);

            }


           /*  arrayForDisplay = []; 
            arrayForDisplay.push(numberEntered); 
            stringForDisplay = arrayForDisplay.join(''); 
            document.getElementById("lower").innerText = stringForDisplay;
            console.log(stringForDisplay); */
            
           


        }
        
        else if (numberEntered === "=") {
            let num4 = 5;
            let num5 = 6;

            let sumAll = add(num4, num5)
            console.log(sumAll);       
        }
    
      
        
        

        
       
       
    }); 
  }

// make two arrays


  // While a specific button is not clicked the new value should be added to the array. 
  

