const form = document.getElementById("volunteerform");
const charityname = document.getElementById("charityname");
const hoursvolunteered = document.getElementById("hoursvolunteered");
const date = document.getElementById("date");
const experince = document.getElementById("experience");

const charityerror = document.getElementById("charityerror");
const hourserror = document.getElementById("hourserror");
const dateerror = document.getElementById("dateerror");
const ratingerror = document.getElementById("ratingerror");


// This is event listener when form is submitted
form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (charityname.value === "") {
        charityerror.textContent = "! Please enter a charity name.";
    }

    if (hoursvolunteered.value === "") {
        hourserror.textContent = " Please enter a valid number of hours.";
    }
    
    else if (isNaN(hoursvolunteered.value) || hours <=0) {
        hourserror.textContent = " Hours volunteered must be a positive number";
    }

    if (date.value=== "") {
        dateerror.textContent = " ! Please pick a date.";
    }

    if (experince.value === "") {
        ratingerror.textContent = "Please rate your experience.";
    }

    const entry = {
        charityn: charityname.value,
        hoursv: hoursvolunteered.value,
        dated: date.value,
        experincer: experince.value,
    }

    console.log("Volunteer entry:", entry);
});