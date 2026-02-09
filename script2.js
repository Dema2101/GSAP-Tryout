gsap.registerPlugin(ScrollTrigger);

window.addEventListener("load", () => {
  const originX = "50%";
  const originY = "45.5%";

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".intro",
      start: "top top",
      end: "+=4000",
      scrub: true,
      pin: true,
      anticipatePin: 1,
      invalidateOnRefresh: true
      // markers: true
    }
  });

  // 1) zoom u prozor
tl.to(".scene-bg", {
  scale: 12.2,
  transformOrigin: `${originX} ${originY}`,
  ease: "none"
});


  // 2) "enter" - bg nestaje, window preuzima ekran
  tl.to(".scene-bg", { opacity:0, ease: "none" }, ">");

  tl.to(".window-content", {
    scale: 1.5,
    ease: "none"
  }, "<");

  ScrollTrigger.refresh();
});
