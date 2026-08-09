const menuButton = document.getElementById("menuButton");

if (menuButton) {
    menuButton.addEventListener("click", () => {
        alert("Mobile navigation coming soon!");
    });
}

const revealElements = document.querySelectorAll(
    ".section, .blog-section"
);

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                observer.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.15
    }
);

revealElements.forEach((element) => {
    observer.observe(element);
});

const cursorDot = document.querySelector(".cursor-dot");
const cursorCircle = document.querySelector(".cursor-circle");

if (cursorDot && cursorCircle) {

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;

    let circleX = mouseX;
    let circleY = mouseY;

    document.addEventListener("mousemove", (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;

        cursorDot.style.left = `${mouseX}px`;
        cursorDot.style.top = `${mouseY}px`;
    });

    function animateCursor() {
        circleX += (mouseX - circleX) * 0.12;
        circleY += (mouseY - circleY) * 0.12;

        cursorCircle.style.left = `${circleX}px`;
        cursorCircle.style.top = `${circleY}px`;

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

document.querySelectorAll('a[href^="#"]').forEach((link) => {

    link.addEventListener("click", (e) => {

        const targetId = link.getAttribute("href");

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
