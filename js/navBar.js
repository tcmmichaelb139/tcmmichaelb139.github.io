const navBar = document.querySelector(".navBar");

let timeline = gsap.timeline({
    default: { duration: 0.5, ease: "power2.inOut" },
});

navBar.addEventListener("mouseover", () => {
    if (timeline.reversed()) {
        timeline.play();
    } else {
        timeline
            .to(".linkText", { display: "block" })
            .to("nav", { width: "16rem" }, "-=0.5")
            .to(
                ".linkText",
                { opacity: 1, pointerEvents: "all", stagger: 0.1 },
                "-=0.4"
            );
    }
});

navBar.addEventListener("mouseout", () => {
    timeline.reverse();
});

const themeButton = document.querySelector("#themeButton");
const body = document.body;

const theme = localStorage.getItem("theme");

if (body.classList.contains("dark") && theme === "light")
    body.classList.replace("dark", "light");

themeButton.addEventListener("click", () => {
    if (body.classList.contains("light")) {
        body.classList.replace("light", "dark");
        localStorage.setItem("theme", "dark");
    } else {
        body.classList.replace("dark", "light");
        localStorage.setItem("theme", "light");
    }
});
