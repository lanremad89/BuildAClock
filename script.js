// Declare a function 
let clock = () => {
  // Date() object represents the date & time depending on your time zone
    let date = new Date();
    // the Date() object has multiple methods & like getHours, Minutes & Seconds
    let hrs = date.getHours();
    let mins = date.getMinutes();
    let secs = date.getSeconds();

    // IMPORTANT to remember that the Date() object is a 24 hour format.
    // So we will use conditional to turn it into 12 hour format.
    let period = "AM";
    if (hrs == 0) {
      hrs = 12;
    } else if (hrs >= 12) {
      hrs = hrs - 12;
      period = "PM";
    }
    /* To make it look better, we’ll also be adding a zero 
    in front of the numbers whenever the number is less than 10. */
    hrs = hrs < 10 ? "0" + hrs : hrs;
    mins = mins < 10 ? "0" + mins : mins;
    secs = secs < 10 ? "0" + secs : secs;
  
    // the time variable will concat the hours, mins & secs. 
    let time = `${hrs}:${mins}:${secs}:${period}`;
    document.getElementById("clock").innerHTML = time;

    /*setInterval function is used so the time can change. We are passing 
    clock as the first parameter and 1000 which is 1 second as the second parameter.*/
    setTimeout(clock, 1000);
  };
  // call function
  clock();
  