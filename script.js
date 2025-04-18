const hamburger = document.querySelector('.hamburger');
const topnav = document.querySelector('.topnav');
 
hamburger.addEventListener('click', function() {
    topnav.classList.toggle('show');
});
 