gsap.registerPlugin(ScrollTrigger);

let locoScroll;

window.addEventListener("load", () => {

  locoScroll = new LocomotiveScroll({
    el: document.querySelector("#html-wrapper"),
    smooth: true
  });

  locoScroll.on("scroll", ScrollTrigger.update);
   locoScroll.scrollTo(0, { duration: 0 });

  ScrollTrigger.scrollerProxy("#html-wrapper", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },

    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight
      };
    },

    pinType: document.querySelector("#html-wrapper").style.transform
      ? "transform"
      : "fixed"
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  ScrollTrigger.refresh();



  gsap.to(".loading-wrapper", {
  delay: 3,
  y: "-100%",
  ease: "back",
  duration: 2,
  scale: 0.5,
  opacity: 0,
  display: "none",
});

// hero section
gsap.to("#hero", {
  y: -100,
  scale: 0.5,
  opacity: 0,

  scrollTrigger: {
    trigger: "#hero",
    scroller: "#html-wrapper",
    start: "top top",
    end: "bottom top",
    scrub: 2,
  },
});


});