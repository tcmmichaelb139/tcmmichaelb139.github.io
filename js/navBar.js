const navBar = document.querySelector(".navBar");

let timeline = gsap.timeline({
    defaults: { duration: 0.5, ease: "power2.inOut" },
});

navBar.addEventListener("mouseover", () => {
    if (timeline.reversed()) {
        timeline.play();
    } else {
        timeline
            .to(".linkText", { display: "block" }, 0)
            .to("nav", { width: "16rem" }, 0)
            .to(
                ".linkText",
                { opacity: 1, pointerEvents: "all", stagger: 0.1 },
                0
            )
            .to(".logo svg", { rotate: "360deg" }, 0);
    }
});

navBar.addEventListener("mouseout", () => {
    timeline.reverse();
});

const themeButton = document.querySelector("#themeButton");
const body = document.body;

const theme = localStorage.getItem("theme");

let themeTl = gsap.timeline({
    defaults: { duration: 1, ease: "back.inOut(2)" },
});

if (body.classList.contains("dark") && theme === "light") {
    themeTl
        .to("#themeButton .sun", { opacity: 0, rotate: "360deg" })
        .to("#themeButton .moon", { opacity: 1, rotate: "360deg" }, "-=0.5");
    body.classList.replace("dark", "light");
}

themeButton.addEventListener("click", () => {
    if (body.classList.contains("light")) {
        themeTl.reverse();
        body.classList.replace("light", "dark");
        localStorage.setItem("theme", "dark");
    } else {
        if (themeTl.reversed()) {
            themeTl.play();
        } else {
            themeTl
                .to("#themeButton .sun", { opacity: 0, rotate: "360deg" })
                .to(
                    "#themeButton .moon",
                    { opacity: 1, rotate: "360deg" },
                    "-=0.5"
                );
        }
        body.classList.replace("dark", "light");
        localStorage.setItem("theme", "light");
    }
});
