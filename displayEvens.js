
document.addEventListener("DOMContentLoaded", 
function(event) 
{ 
    var startingNumber = document.getElementById("startingNumber").value;
    var endingNumber = document.getElementById("endingNumber").value;
    var step = document.getElementById("step").value;
    var answerDiv = document.getElementById("answerDiv");

    var t = document.createTextNode("Test<br>");
    answerDiv.appendChild(t);

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
} );
