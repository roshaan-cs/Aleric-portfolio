// ================================
// MOBILE MENU
// ================================

const menuButton = document.getElementById("menuButton");
const nav = document.querySelector(".nav nav");

if (menuButton && nav) {
    menuButton.addEventListener("click", () => {
        nav.classList.toggle("mobile-open");
    });

    // Close menu after clicking a navigation link
    nav.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            nav.classList.remove("mobile-open");
        });
    });
}


// ================================
// REVEAL SECTIONS
// ================================

const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    },
    {
        threshold: 0.15
    }
);

sections.forEach((section) => {
    observer.observe(section);
});


// ================================
// CUSTOM CURSOR
// ================================

const cursorDot = document.querySelector(".cursor-dot");
const cursorCircle = document.querySelector(".cursor-circle");

let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;

let circleX = mouseX;
let circleY = mouseY;

if (cursorDot && cursorCircle) {

    document.addEventListener("mousemove", (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;

        cursorDot.style.left = mouseX + "px";
        cursorDot.style.top = mouseY + "px";
    });

    function animateCursor() {
        circleX += (mouseX - circleX) * 0.12;
        circleY += (mouseY - circleY) * 0.12;

        cursorCircle.style.left = circleX + "px";
        cursorCircle.style.top = circleY + "px";

        requestAnimationFrame(animateCursor);
    }

    animateCursor();

    const hoverElements = document.querySelectorAll(
        "a, button, .project, .blog-card, .service-item"
    );

    hoverElements.forEach((element) => {

        element.addEventListener("mouseenter", () => {
            cursorCircle.classList.add("cursor-hover");
        });

        element.addEventListener("mouseleave", () => {
            cursorCircle.classList.remove("cursor-hover");
        });

    });
}


// ================================
// SMOOTH NAVIGATION
// ================================

document.querySelectorAll('a[href^="#"]').forEach((link) => {

    link.addEventListener("click", function (e) {

        const targetId = this.getAttribute("href");

        if (!targetId || targetId === "#") return;

        const target = document.querySelector(targetId);

        if (!target) return;

        e.preventDefault();

        target.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    });

});


// ================================
// BACK TO TOP
// ================================

const backTop = document.getElementById("backTop");

if (backTop) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 600) {
            backTop.style.opacity = "1";
            backTop.style.pointerEvents = "auto";
        } else {
            backTop.style.opacity = "0";
            backTop.style.pointerEvents = "none";
        }

    });

    backTop.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}
