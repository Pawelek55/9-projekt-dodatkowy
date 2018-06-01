/*document.addEventListener("DOMContentLoaded", function(){
   console.log(123); 
});*/

let height = document.getElementById('main-header').offsetHeight;
let nav = document.getElementById('main-nav');
let team = document.getElementById('team');
let button = document.querySelector('.main-nav-list').children;

function changeColor(){
    
     if (document.documentElement.scrollTop > height) {
        nav.setAttribute('class','main-nav-color');
     } else{
        nav.removeAttribute('class','main-nav-color');
     }
}

window.onscroll = function(){
    changeColor();
}

console.log(document.documentElement.scrollTop); // czy w tym przypadku head jest pomijany
console.log(document.body.scrollTop); /*Nie wyświetla odległości*/
console.log(team.scrollTop);  /*Nie wyświetla odległości*/



/*nav.addEventListener('click', function(){
//    'a[href^="#"]',
    console.log(123);
})*/

function manuClick(event){
//    console.log(event);
    if(event.target.querySelector = 'main-nav-list-item') return;
//    if(event.target.querySelectorAll = '.main-nav-list-item')
    
        document.documentElement.scroll(0, 50);
/*        $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top -74
    }, 900);
        */
}

document.querySelector('.main-nav-list').addEventListener('click', manuClick);

//function printContent(event /*pseudoparametr, kliknięcie*/){
////    console.log(event);
//    if(event.target.tagName != 'BUTTON') return;
//    document.getElementById('button-text').innerHTML += event.target.innerText;
//}
//
//document.getElementById('button-box').addEventListener('click', printContent);

$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top 
    }, 900);
});

