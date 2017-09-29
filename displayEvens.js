//This function validates that the values form the user are numbers, and step is a positive number.  If the inputs are not, an error is thrown.
function validateItems() {
    var startingNumber = Number(document.getElementById("startingNumber").value);
    var endingNumber = Number(document.getElementById("endingNumber").value);
    var step = Number(document.getElementById("step").value);
   
    //Alerts user if starting number is not a number
    if (startingNumber == "" || isNaN(startingNumber)) {
        alert("Starting number must be filled in with a number.");
        document.forms["displayEvens"]["startingNumber"]
           .parentElement.className = "form-group has-error";
        document.forms["displayEvens"]["startingNumber"].focus();
        return false;
    }
    //Alerts user if ending number is not a number
    if (endingNumber == "" || isNaN(endingNumber)) {
        alert("Ending number must be filled in with a number.");
        document.forms["displayEvens"]["endingNumber"]
           .parentElement.className = "form-group has-error";
        document.forms["displayEvens"]["endingNumber"].focus();
        return false;
    }
    //Alerts user if step is negative or NaN
    if (step < 0 || isNaN(step)) {
        alert("Step must be filled in with a number.");
        document.forms["displayEvens"]["step"]
           .parentElement.className = "form-group has-error";
        document.forms["displayEvens"]["step"].focus();
        return false;
    }
    //Alerts user if ending number is less than starting number
    if (endingNumber <= startingNumber) {
        alert("Ending number must be greater than or equal to starting number.");
        document.forms["displayEvens"]["endingNumber"]
           .parentElement.className = "form-group has-error";
        document.forms["displayEvens"]["endingNumber"].focus();
        return false;
    }


//valididateItems() passed test

//Only even numbers will be displayed 
//Even numbers will be checked with modulus (%) = 0 (If true, add to array.  If not, don't add it to array)
//Will increment by step each time loop runs.  Loop will start with startingNumber and end at endingNumber.

var evenNumbers = []; //Even numbers will be stored in this array
var index = 0; //Index of array
for (var i = startingNumber; i <= endingNumber; i++) {
    if (i %2 == 0) {
        //If it's even, we will add it to the current array index - then increment the index by one (for the next time the for loop runs so we don't rewrite the stored values)
        alert("The number: " + i  + " is even, adding to array.");         
        evenNumbers[index] = i;
        index++;
    } else {
        alert("The number: " + i  + " is odd, not adding to array."); 
    }
    i += step - 1;
}
return false;
}



/*document.addEventListener("DOMContentLoaded", 
function(event) 
{ 
    var startingNumber = Number(document.getElementById("startingNumber").value);
    var endingNumber = Number(document.getElementById("endingNumber").value);
    var step = Number(document.getElementById("step").value);
    var answerDiv = document.getElementById("answerDiv");

    var submitButton = document.getElementById("displayButton");
    submitButton.onclick = function()
    {
        
        var b = document.createTextNode(startingNumber);
        answerDiv.appendChild(b);
        //for(var i = startingNumber; i <= endingNumber; ) {
        //    var b = document.createTextNode(i);
        //    answerDiv.appendChild(b);
        //    i = i + step;
        //}
    }; 
} );*/