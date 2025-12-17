function showTime(){
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var session = "AM";

    if(h == 0){
        h = 12;
    }

    if(h > 12){
        h = h - 12;
        session = "PM";
    }

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    var time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("MyClockDisplay").innerText = time;

    setTimeout(showTime, 1000);
}

// Function to change the clock's style by updating its class name
function changeStyle(styleName) {
    const clockElement = document.getElementById("MyClockDisplay");
    clockElement.className = 'clock ' + styleName;
}

showTime();


function myFunction() {
    const element = document.getElementById("myDIV");
    element.classList.remove("mystyle");  // Remove mystyle class
    element.classList.add("newone");  // Add newone class
 }

 let countdownInterval = null;
 let timeRemaining = 0;
 
 // 1. Initialize the audio object with your file path or URL
 const alarmSound = new Audio('indeximagesandaudio/siren.mp3'); 
 
 function startTimer() {
     if (countdownInterval) {
         clearInterval(countdownInterval);
     }
 
     const durationInput = document.getElementById('durationInput');
     const seconds = parseInt(durationInput.value, 10);
 
     if (isNaN(seconds) || seconds <= 0) {
         alert("Please enter a valid number of seconds.");
         return;
     }
 
     timeRemaining = seconds;
     countdownInterval = setInterval(updateTimer, 1000);
 }
 
 function stopTimer() {
     clearInterval(countdownInterval);
     countdownInterval = null;
     // Optional: Stop the sound if the user clicks stop
     alarmSound.pause();
     alarmSound.currentTime = 0;
 }
 
 function updateTimer() {
     const display = document.getElementById('timerDisplay');
     
     const minutes = Math.floor(timeRemaining / 60);
     const seconds = timeRemaining % 60;
 
     const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
     const formattedSeconds = seconds < 10 ? "0" + seconds : seconds;
 
     display.textContent = formattedMinutes + ":" + formattedSeconds;
 
     if (timeRemaining <= 0) {
         clearInterval(countdownInterval);
         countdownInterval = null;
         display.textContent = "00:00 - Time Up!";
         
         // 2. Play the sound
         alarmSound.play().catch(error => {
             console.log("Autoplay was prevented. Please interact with the page first.");
         });
 
     } else {
         timeRemaining--;
     }
 }

 function changeImage() {
    var image = document.getElementById('myImage1');
    if (image.src.match("houseon")) {
      image.src = "indeximagesandaudio/houseoff.png";
    } else {
      image.src = "indeximagesandaudio/houseon.png";
    }
  }