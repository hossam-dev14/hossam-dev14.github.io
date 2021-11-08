const sidebar = document.querySelector('.sidebar')
    toggle = document.querySelector('.toggle'),
    nav = document.querySelector('nav'),
    // const ul = menu.childNodes[3];
    links = document.querySelectorAll('.links li');


//---------- Links add active class
links.forEach((link) => {
    link.addEventListener('click', (e) => {
        // Remove class 'active' for every a
        links.forEach(a => {
            a.classList.remove('active')
        });
        // Add class 'active' to the current target a
        e.currentTarget.classList.add('active');
    });
});


//---------- Toggle bar
// toggle.addEventListener('click', function(){
//     'use strict;'
    
//     const icon = sidebar.querySelector('i'),
//         content = document.querySelector('.content');

//     if(sidebar.style.transform === 'translateX(-15rem)'){
//         sidebar.style.transform = 'translateX(0px)';
//         icon.classList.toggle('icon-close');
//         content.style.marginLeft = "15rem";
//     }
//     else{
//         sidebar.style.transform = 'translateX(-15rem)';
//         icon.classList.remove('icon-close');
//         icon.classList.add('icon-menu');
//         content.style.marginLeft = "0";
//     }
// });

// if (window.innerWidth <= '964' && window.innerWidth > '394') {
//     sidebar.querySelector('i').classList.toggle('icon-close');

// } else {
//     sidebar.querySelector('i').classList.add('icon-close');
// } 






// //---------- ScrollUp
// let scrollUp = document.querySelector('.scrollup');
// // Show & Hide TOP button
// window.onscroll = function () {
//   'use strict';
//   if (window.pageYOffset >= 600) {
//     scrollUp.style.display = 'block';
//   } else {
//     scrollUp.style.display = 'none'
//   }
// }



// --------- Nice Scaoll
$("body").niceScroll({
  cursorcolor: "#ccc",
  cursorwidth: "9px"
});

$(".sidebar").niceScroll({
  cursorcolor: "var(--secondary)",
  cursorwidth: "5px"
});

// Nice scroll
// $(function() {  
//   $("body").niceScroll();
// });

// $(".nicescroll-box").niceScroll(".wrap",{cursorcolor:"aquamarine"});






// -------------- JSON 

// fetch('../users.json').then(res => res.json())
// .then(json => {
//   console.log(json);
// })

// fetch('data.json')
//   .then(response => response.json())
//   .then(data => console.log(data));




// Loader

window.addEventListener("load", () => {
  setTimeout(loade, 2000)
});

const loade = () => {
  const loader = document.querySelector(".loader");
  loader.className += " hidden"; 
}

