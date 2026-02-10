gsap.registerPlugin(ScrollTrigger);

window.addEventListener("load", () => {
  const originX = "50%";
  const originY = "45.5%";

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".intro",
      start: "top top",
      end: "+=12000",
      scrub: true,
      pin: true,
      anticipatePin: 1,
      invalidateOnRefresh: true
      // markers: true
    }
  });

  // 1) zoom u prozor
tl.to(".scene-bg", {
  scale: 3,
  transformOrigin: `${originX} ${originY}`,
  ease: "none"
});


  // 2) "enter" - bg nestaje, window preuzima ekran
  tl.to(".scene-bg", { 
     scale: 12.2,
  ease: "none",
  opacity:0,
}, ">");

  tl.to(".window-content", {
    scale: 1.5,
    ease: "none"
  }, "<");


   tl.to(".window-content", {
    scale: 1.5,
    ease: "none"
  }, "<");


  ScrollTrigger.refresh();
});
