document.getElementById("currentDay").textContent = moment().format("dddd, MMMM Do, YYYY");

var now = moment();

function trackTime() {
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

    for (var i = 0; i < firstTime.length; i++) {
        var startTime = moment(firstTime[i], 'h:mma');

        if (now.isAfter(startTime)) {
            var desc = document.querySelectorAll('.description');
            desc.forEach(descrSet);

            function descrSet() {
                desc.classList.add("past");
                console.log("After worked");
            };
            /*
            desc.forEach(function(desc) {

            }) */
            //descrSet();    
        };  
    }; 

    //document.querySelectorAll(".saveBtn").forEach(function(saveBtn) {
    //saveBtn.addEventListener("click", saveTask)

    for (var i = 0; i < lastTime.length; i++) {
        var endTime = moment(lastTime[i], 'h:mma');
        
        if (now.isBefore(endTime)) {
            function descrSet() {
                var desc = document.querySelector('.description');
                desc.classList.add("future");
                console.log("Before worked");
            };
            descrSet();
        }; 
    };

    for (var i = 0, j = 0; i < firstTime.length, j < lastTime.length; i++, j++) {

        if (now.isBetween(firstTime[i], lastTime[j])) {
            function descrSet() {
                var desc = document.querySelector('.description');
                desc.classList.add("present");
                console.log("Between worked");
            };
            descrSet();
        };   
    };
};

trackTime();


//use .replace("[class], [class]") to change the class of a <textarea> when a certain time has passed
//dayjs().isAfter(dayjs().format("7"));

var description = document.querySelector("textarea").textContent;

var saveTask = function() {
    localStorage.setItem("description", description);
    console.log("info stored");
    console.log(description);
};

document.querySelectorAll(".saveBtn").forEach(function(saveBtn) {
    saveBtn.addEventListener("click", saveTask)
});


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