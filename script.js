window.addEventListener("load", () => {
  const scroll = new LocomotiveScroll({
    el: document.querySelector("[data-scroll-container]"),
    smooth: true
  });

  // Start at the top
  scroll.scrollTo(0, { duration: 0 });
});