// Date header
document.getElementById("currentDay").textContent = moment().format("dddd, MMMM Do, YYYY");
 // this is just to test formatting
var thing = document.querySelector("h1").className;
console.log(thing);

// current time in full format in case I need it
var now = moment();

var time = document.querySelector('.description').getAttribute("id")
    console.log(time);


//This is setting the color of each textarea
/*function trackTime(event) {
    //arrays of times for the forLoops
    var firstTime = [
        '9:00am',
        '10:00am',
        '11:00am',
        '12:00pm',
        '1:00pm',
        '2:00pm',
        '3:00pm',
        '4:00pm',
        '5:00pm'
    ];
    var lastTime = [
        '10:00am',
        '11:00am',
        '12:00pm',
        '1:00pm',
        '2:00pm',
        '3:00pm',
        '4:00pm',
        '5:00pm',
        '6:00pm'
    ];
    
    //indicates past hours
    for (var i = 0; i < firstTime.length; i++) {
        var startTime = moment(firstTime[i], 'h:mma');

        if (now.isAfter(startTime)) {
            function descrSetAfter() {
                
                document.querySelectorAll('.description').forEach(function(dscrpA) {
                    dscrpA.classList.add("past", "col-10", "description");
                console.log("After worked");
                });
            };
            descrSetAfter();    
        };  
    }; 
    
    //indicates future hours
    for (var i = 0; i < lastTime.length; i++) {
        var endTime = moment(lastTime[i], 'h:mma');
        
        if (now.isBefore(endTime)) {
            function descrSetBefore() {
                 
                document.querySelectorAll('.description').forEach(function(dscrpB) {
                    dscrpB.classList.add("future", "col-10", "description");
                console.log("Before worked");
                });
            };
            descrSetBefore();
        }; 
    };
    
    //indicates present hour
    for (var i = 0, j = 0; i < firstTime.length, j < lastTime.length; i++, j++) {

        if (now.isBetween(firstTime[i], lastTime[j])) {
            function descrSetBetween() {

                document.querySelectorAll('.description').forEach(function(dscrpC) {
                    dscrpC.classList.add("present", "col-10", "description");
                console.log("Between worked");
                });
            };
            descrSetBetween();
        };   
    };
    

};

if (now.isBefore(document.getAttribute("name"))) {
    console.log("it worked");
}
var timeEl = document.getAttribute("name");
console.log(timeEl); 

//I have this "name" attribute that is the name of each hour. I need to select that somehow. If the current time
// is after/before that name, then the textarea is a certain color.

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
    

trackTime();
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