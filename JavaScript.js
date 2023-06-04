// JavaScript For Clock Functionality
const deg = 6;
const hr = document.querySelector('#hr');
const min = document.querySelector('#min');
const sec = document.querySelector('#sec');
const clock = document.querySelector('#clock');

setInterval(() => {
    let day = new Date();
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * deg;
    let ss = day.getSeconds() * deg;

    hr.style.transform = `rotateZ(${(hh)+(mm/12)}deg)`;
    min.style.transform = `rotateZ(${(mm)}deg)`;
    sec.style.transform = `rotateZ(${(ss)}deg)`;
});


// Dark Mode 
let icon = document.getElementById('icon');

icon.onclick = function(){
    document.body.classList.toggle('dark-theme');
    if(document.body.classList.contains('dark-theme')){
        icon.src = 'img/moon.png';
    }
    else{
        icon.src = 'img/sun.png';
    }
}