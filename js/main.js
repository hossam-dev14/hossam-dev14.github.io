const sidebar = document.querySelector('.sidebar')
    toggle = document.querySelector('.toggle'),
    nav = document.querySelector('nav'),
    links = document.querySelectorAll('.links li');


//---------- Links add active class
links.forEach((link) => {
    link.addEventListener('click', (e) => {
        links.forEach(a => {
            a.classList.remove('active')
        });
        e.currentTarget.classList.add('active');
    });
});


// --------- Nice Scaoll
$("body").niceScroll({
  cursorcolor: "#ccc",
  cursorwidth: "9px"
});

$(".sidebar").niceScroll({
  cursorcolor: "var(--secondary)",
  cursorwidth: "5px"
});


// Loader
window.addEventListener("load", () => {
  setTimeout(loade, 2000)
});

const loade = () => {
  const loader = document.querySelector(".loader");
  loader.className += " hidden"; 
}

