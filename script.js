const charityname = document.getElementById('charityname');
const donationamount = document.getElementById('donationamount');
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

    const formdata = {
        charityname: charityname.value,
        donationamount: donationamount.value,
        donationdate: donationdate.value,
        donorcomment: donorcomment.value
   
    };
   
   
    localStorage.setItem('datasubmission', JSON.stringify(formdata))
    submitinfo(formdata);
    saveToLocalStorage(formdata);
 
});

const hamburger = document.querySelector('.hamburger');
const topnav = document.querySelector('.topnav');
 
hamburger.addEventListener('click', function() {
    topnav.classList.toggle('show');
});

function submitinfo() {
    const charityname = document.getElementById('charityname').value;
    const donationamount = document.getElementById('donationamount').value;
    const donationdate = document.getElementById('donationdate').value;
    const donorcomment = document.getElementById('donorcomment').value;
 
    // get table and insert rows
    const table = document.getElementById("donation");
    const addrow = table.insertRow(table.rows.length);
 
    // insert
    addrow.insertCell(0).innerHTML = charityname;
    addrow.insertCell(1).innerHTML = donationamount;
    addrow.insertCell(2).innerHTML = donationdate;
    addrow.insertCell(3).innerHTML = donorcomment;
    addrow.insertCell(4).innerHTML = '<button onclick="deleteData(this)">Delete</button>';
}
function deleteData(button)  {
    const row = button.parentNode.parentNode;// this will get the parent row of the button
    row.parentNode.removeChild(row);
}