// Date header
document.getElementById("currentDay").textContent = moment().format("dddd, MMMM Do, YYYY");

// current time in full format in case I need it
var now = moment();

//This is setting the color of each textarea
function trackTime() {
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

trackTime();


var text = document.querySelector("textarea").textContent;

// Adds content of textArea to local storage
var saveTask = function() {
    localStorage.setItem("description", text);
    console.log("info stored");
    console.log(text);
};

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