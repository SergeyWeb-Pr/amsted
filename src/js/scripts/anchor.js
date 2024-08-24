// const anchors = document.querySelectorAll('a[href*="#"]');

// for (let anchor of anchors) {
//     anchor.addEventListener("click", function (e) {
//         e.preventDefault();
//         const blockID = anchor.getAttribute('href')
//         const fixedHeaderHeight = 30;
//         const top = document.querySelector('' + blockID).offsetTop - fixedHeaderHeight;
//         window.scrollTo({
//             top,
//             left: 0,
//             behavior: "smooth",
//         })
//     })
// }

// var mainNav = document.querySelector('.anchor-top');

// window.onscroll = function () {
//     windowScroll();
// };

// function windowScroll() {
//     mainNav.classList.toggle("scroll", mainNav.scrollTop > 50 || document.documentElement.scrollTop > 50);
// }