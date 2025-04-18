const charityname = document.getElementById('charityname');
const donationamount = document.getElementById('number');
const donationdate = document.getElementById('donationdate');
const donorcomment = document.getElementById('donorcomment');
const donationform = document.getElementById('donation-form');
 
const charitynameerror = document.getElementById('charityname-error');
const donationamounterror = document.getElementById('donationamount-error');
const donationdateerror = document.getElementById('donationdate-error');
const donorcommenterror = document.getElementById('donorcomment-error');
 
 
donationform.addEventListener('submit', (e) =>
{
    e.preventDefault();
 
    charitynameerror.innerHTML = "";
 
    if(charityname.value === "" || charityname.value === null){
       
       charitynameerror.innerHTML = "please enter a charity name";
    }
 
    donationamounterror.innerHTML = "";
    if (donationamount.value === "" || donationamount.value <= 0){
        donationamounterror.innerHTML = "please enter a valid donation amount";
    }
 
    donationdateerror.innerHTML = "";
    if (donationdate.value === "" ){
        donationdateerror.innerHTML = "please enter a donation date";
 
    }
 
    donorcommenterror.innerHTML = "";
    if(donorcomment.value === "" || donorcomment.value === null){
       
        donorcommenterror.innerHTML = "please enter a comment";
    }
 
});

const hamburger = document.querySelector('.hamburger');
const topnav = document.querySelector('.topnav');
 
hamburger.addEventListener('click', function() {
    topnav.classList.toggle('show');
});
 