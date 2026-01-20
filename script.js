gsap.registerPlugin(ScrollTrigger);

/* ===============================
   STORE ORIGINAL STATES
================================ */
const originalState = {};

function saveState(selector) {
  const el = document.querySelector(selector);
  originalState[selector] = {
    top: gsap.getProperty(el, "top"),
    left: gsap.getProperty(el, "left"),
    right: gsap.getProperty(el, "right"),
    scale: gsap.getProperty(el, "scale"),
    rotate: gsap.getProperty(el, "rotate")
  };
}

[
  "#fanta",
  "#halfOrange",
  "#twoOrange",
  "#leaf"
].forEach(saveState);

/* ===============================
   SECTION TWO
================================ */
const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".two",
    start: "top bottom",
    end: "center center",
    scrub: true,
    invalidateOnRefresh: true,

    // 🔥 RESTORE WHEN SCROLLING UP
    onLeaveBack: () => {
      gsap.to("#fanta", originalState["#fanta"]);
      gsap.to("#halfOrange", originalState["#halfOrange"]);
      gsap.to("#twoOrange", originalState["#twoOrange"]);
      gsap.to("#leaf", originalState["#leaf"]);
    }
  }
});

tl.to("#fanta", {
  top: "108%",
  left: "5%",
  scale: 1,
  overwrite: "auto"
})

.to("#halfOrange", {
  top: "130%",
  left: "20%",
  scale: 1,
  overwrite: "auto"
}, "<")

.to("#twoOrange", {
  top: "155%",
  right: "40%",
  scale: 1,
  overwrite: "auto"
}, "<")

.to("#leaf", {
  top: "115%",
  left: "70%",
  rotate: 6,
  overwrite: "auto"
}, "<");


/* ===============================
   SECTION THREE
================================ */
const tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".three",
    start: "top bottom",
    end: "center center",
    scrub: true,
    invalidateOnRefresh: true,

    // 🔥 RESTORE WHEN SCROLLING UP
    onLeaveBack: () => {
      gsap.to("#fanta", originalState["#fanta"]);
      gsap.to("#halfOrange", originalState["#halfOrange"]);
    }
  }
});

tl2.fromTo("#lemon",
  { x: -150, rotate: 0 },
  { x: 0, rotate: 0 }
)

.fromTo("#CocaCola",
  { x: -150, rotate: 0 },
  { x: 0, rotate: 0 },
  "<"
)

.fromTo("#dew",
  { x: 150, rotate: 0 },
  { x: 0, rotate: 0 },
  "<"
)

.to("#fanta", {
  scale: 1.05,
  top: "212%",
  left: "34%",
  overwrite: "auto"
}, "<")

.to("#halfOrange", {
  scale: 1.05,
  top: "195%",
  left: "35%",
  overwrite: "auto"
}, "<");


/* ===============================
   REFRESH AFTER LOAD
================================ */
window.addEventListener("load", () => {
  ScrollTrigger.refresh();
});


/* ===============================
   CLICK HANDLER
================================ */
document.getElementById("secondFanta").addEventListener("click", () => {
  window.location.href = "/buyingPage/buy.html";
});
