// Date header
document.getElementById("currentDay").textContent = moment().format("dddd, MMMM Do, YYYY");


function trackTime() {
    var timeSlot = [
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17
    ];

    for (var i = 0; i < timeSlot.length; i++) {
        var time = moment().format('HH');
        var hour = timeSlot[i];

        console.log(time);
        console.log(hour);

        if (time.isBefore(hour)) {
            document.querySelectorAll('.description').forEach(function(dscrpB) {
                dscrpB.classList.add("future", "col-10", "description");
            console.log("Before worked");
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
    console.log(linkEl);

    var key = Math.random();
    var text = document.getElementById(linkEl).value;
    localStorage.setItem(key, text);
    console.log("info stored");
    console.log(text);
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