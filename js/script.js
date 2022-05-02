// Stores today's date in milliseconds
const today = new Date().getTime();
// Hold the 30 day default timer that is specified in the challenge
const addThirtyDays = 2592000000;

function updateTimer() {
    now = new Date().getTime();
    futureDate = today + addThirtyDays;
    difference = futureDate - now;

    d = Math.floor(difference / (1000 * 60 * 60 * 24));
    h = Math.floor(difference / (1000 * 60 * 60));
    m = Math.floor(difference / (1000 * 60));
    s = Math.floor(difference / 1000);

    days = d;
    hours = h - d * 24;
    mins = m - h * 60;
    secs = s - m * 60;

    // Displays timer on the page
    document.querySelector(".days").innerText = days;
    document.querySelector(".hours").innerText = hours;
    document.querySelector(".minutes").innerText = mins;
    document.querySelector(".seconds").innerText = secs;
}

setInterval("updateTimer()", 1000);

// Get the date of the product launch  to display on page
const localDate = new Date();
localDate.setDate(localDate.getDate() + 30);
const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

const date =
    localDate.getDate() +
    " " +
    months[localDate.getMonth()] +
    " " +
    localDate.getFullYear();

document.querySelector(".product-debut").innerText = date;





