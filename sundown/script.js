const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

let container = document.querySelector("#page3");
let fixed = document.querySelector("#fixed-image");

// Show with fade
container.addEventListener("mouseenter", function () {
    fixed.style.opacity = "1";
});

// Hide with fade
container.addEventListener("mouseleave", function () {
    fixed.style.opacity = "0";
});

let elems = document.querySelectorAll(".wrapper");
elems.forEach(function (e) {
    e.addEventListener("mouseenter", function () {
        let image = e.getAttribute("data-image");
        fixed.style.backgroundImage = `url(${image})`;
    });
});
