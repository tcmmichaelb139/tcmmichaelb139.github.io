const navBar = document.querySelector(".navBar");

let timeline = gsap.timeline({
    default: { duration: 0.7, ease: "expo.inOut" },
});

navBar.addEventListener("mouseover", () => {
    if (timeline.reversed()) {
        timeline.play();
    } else {
        timeline
            .to("nav", { width: "16rem" })
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
