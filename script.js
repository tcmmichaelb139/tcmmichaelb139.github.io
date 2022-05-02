document.querySelector(".navBar").addEventListener("mouseover", () => {
    const timeline = gsap.timeline();
    timeline
        .to(document.querySelector(".navBar"), {
            duration: 0.5,
            width: "16rem",
        })
        .to(document.querySelector(".linkText"), { duration: 0.5, opacity: 1 });
});

document.querySelector(".navBar").addEventListener("mouseout", () => {
    const timeline = gsap.timeline();
    timeline
        .to(document.querySelector(".navBar"), {
            duration: 0.5,
            width: "5rem",
        })
        .to(document.querySelector(".linkText"), { duration: 0.5, opacity: 0 });
});
