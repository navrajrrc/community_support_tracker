// Calling the from and its elements
const form = document.getElementById("volunteerform");
const charityname = document.getElementById("charityname");
const hoursvolunteered = document.getElementById("hoursvolunteered");
const date = document.getElementById("date");
const experince = document.getElementById("experience");
// Calling the error message elements
const charityerror = document.getElementById("charityerror");
const hourserror = document.getElementById("hourserror");
const dateerror = document.getElementById("dateerror");
const ratingerror = document.getElementById("ratingerror");

// This is event listener when form is submitted
form.addEventListener("submit", (e) => {
    e.preventDefault();

    let isvalid = true;

// checks if the charity name is empty
    if (charityname.value === "") {
        charityerror.textContent = "! Please enter a charity name.";
        isvalid = false;
    }
// this checks if the hours is empty
    if (hoursvolunteered.value === "") {
        hourserror.textContent = " Please enter a valid number of hours.";
        isvalid = false;
    }
//  this checks if the hour is not a number or less than 0
    else if (isNaN(hoursvolunteered.value) || Number(hoursvolunteered.value) <=0) {
        hourserror.textContent = " Hours volunteered must be a positive number";
        isvalid = false;
    }
//  this checks if the date is selected or not
    if (date.value=== "") {
        dateerror.textContent = " ! Please pick a date.";
        isvalid = false;
    }
//  this checks if the user has rated their experience
    if (experince.value === "" || isNaN(experince.value) || experince <1 || experince >5) {
        ratingerror.textContent = "Please rate your experience.";
        isvalid = false;
    }
//  this create a data object
    if (isvalid) {
    const entry = {
        charityn: charityname.value,
        hoursv: hoursvolunteered.value,
        dated: date.value,
        experincer: experince.value,
    }
//  this print the data in console for now
    console.log("Volunteer entry:", entry);
    alert("Succesfull submission");
}
});