// Get and display the current date
let today = new Date();
let date = today.getDate();
let month = today.getMonth(); // Months are zero-indexed
let year = today.getFullYear();
let fullDate = `${date}/${month + 1}/${year}`;
console.log(fullDate);

let arr = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let Tmonth = arr[month]; // Use the month index to directly get the month name
console.log(Tmonth);

// Function to show the current time and update every second
const showTime = function () {
    setInterval(() => {
        let now = new Date();
        let hours = now.getHours();
        let minutes = now.getMinutes();
        let seconds = now.getSeconds();
        
        // Add leading zeros to single digit numbers
        hours = hours < 10 ? '0' + hours : hours;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;
        
        let time = `${hours}:${minutes}:${seconds}`;
        
        document.getElementById('block').innerHTML = `<h3>${time}</h3>`;
    }, 1000);
};

// Call the showTime function to start displaying the time
showTime();
let monthName=document.getElementById("Fdate").innerHTML=`<h2>${Tmonth}</h2>`;
let datew = document.getElementById("Fdate1").innerHTML=`<h5>${fullDate}</h5>`