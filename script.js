function revealToSpan() {
  document.querySelectorAll(".reveal").forEach(function (elem) {
    let parent = document.createElement("span");
    let child = document.createElement("span");

    parent.classList.add("parent");
    child.classList.add("child");

    child.innerHTML = elem.innerHTML;
    parent.appendChild(child);
    elem.innerHTML = "";
    elem.appendChild(parent);
  });
}

revealToSpan();

let tl = gsap.timeline();

tl.from(".child span", {
  x: 100,
  delay: 1,
  stagger: 0.2,
  duration: 1.5,
  ease: Power3.easeInOut,
})
  .to(".parent .child", {
    y: "-100%",
    duration: 1,
    ease: Circ.easeInOut,
  })
  .to("#loader", {
    height: 0,
    duration: 1,
    ease: Circ.easeInOut,
  })
  .to("#green", {
    height: "100%",
    top: 0,
    duration: 1,
    delay: -0.8,
    ease: Circ.easeInOut,
  })
  .to("#green", {
    height: 0,
    top: 0,
    duration: 1,
    delay: -0.3,
    ease: Circ.easeInOut,
  });
