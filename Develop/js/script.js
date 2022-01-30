// Date header
document.getElementById("currentDay").textContent = moment().format("dddd, MMMM Do, YYYY");

var time = moment();

function trackTime() {
    var timeSlot = [
        9,
        10,
        11,
        12,
        1,
        2,
        3,
        4,
        5
    ];
    for (var i = 0; i < timeSlot.length; i++) {
        
        var hour = timeSlot[i];
        if (time.isSame(hour)) {
            document.querySelectorAll('.description').forEach(function(dscrpA) {
                dscrpA.classList.add("future", "col-10", "description");
            console.log("Same worked");
            });
        }
        else if (time.isBefore(hour)) {
            document.querySelectorAll('.description').forEach(function(dscrpB) {
                dscrpB.classList.add("future", "col-10", "description");
            console.log("Before worked");
            });
        }
        else {
            document.querySelectorAll('.description').forEach(function(dscrpC) {
                dscrpC.classList.add("past", "col-10", "description");
            console.log("After worked");
            });
        }
    }
};
trackTime();

/*
$('#' + timeSlot[i])
 IDEALLY 
var time = the id of the textarea
if (now.isBefore(time, 'ha')) {
    function descrSetBefore() {
                 
    document.querySelectorAll('.description').forEach(function(dscrpB) {
        dscrpB.classList.add("future", "col-10", "description");
    console.log("Before worked");
    });
};
descrSetBefore();
    
*/

// Adds content of textArea to local storage
var saveTask = function(event) {
    //This will log the element that was clicked
    var linkEl = event.target.getAttribute("myAttribute");

    var key = Math.random();
    var text = document.getElementById(linkEl).value;
    localStorage.setItem(key, text);
};

/*
What I need to do is grab the myAttribute name of the save button and match it with the id of the textarea.
If I make the event.target.getAttribute("") a variable, then I have the right name. And what do I do with that?
Can I use that variable as the argument of getElementById? Yes!


 */

document.querySelectorAll(".saveBtn").forEach(function(saveBtn) {
    saveBtn.addEventListener("click", saveTask)
});

/*
function myFunction() {
    var text = document.getElementById("textArea").value;
    document.getElementById("textArea").innerHTML = text;
}
*/


/*
var middleTime = moment();
var startTime = moment('7:00pm', 'h:mma');
var endTime = moment('8:00pm', 'h:mma');
console.log(middleTime.isBetween(startTime, endTime)); // -->true

var now = moment();
var startTime = moment('8:00pm', 'h:mma');
var endTime = moment('9:00pm', 'h:mma');
now.isBetween(startTime, endTime);
 */