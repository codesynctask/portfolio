gsap.registerPlugin(ScrollTrigger);

let locoScroll;

window.addEventListener("load", () => {
  locoScroll = new LocomotiveScroll({
    el: document.querySelector("#html-wrapper"),
    smooth: true,
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
        height: window.innerHeight,
      };
    },

    pinType: document.querySelector("#html-wrapper").style.transform
      ? "transform"
      : "fixed",
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

gsap.utils.toArray("section").forEach((sec) => {

  gsap.to(sec, {
    y: -100,
    scale: 0.7,

    scrollTrigger: {
      trigger: sec,
      scroller: "#html-wrapper",
      start: "top top",
      end: "bottom bottom",
      scrub: 2,
    }

  });

});

gsap.to(".content h1", {
  delay:8,
  scale: 1.3,
  duration: 2,
  ease: "power2.out",
  // color:"white",

  scrollTrigger: {
    trigger: "section .content h1",
    scroller: "#html-wrapper",   // since you are using locomotive
    start: "top 100%",
    end: "top 20%",
    scrub: true,
  }
});


  });
