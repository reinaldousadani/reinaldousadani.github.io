// Waving Hand Animation

const waveTL = gsap.timeline({
  onComplete: function () {
    this.restart();
  },
  defaults: { duration: 2 },
});
waveTL
  .fromTo(".seq0", { rotate: -45 }, { rotate: 45 })
  .to(".seq0", { rotate: -45 });

//Landing Page Animation

const aboutTL = gsap.timeline({
  onComplete: bounceEffect("seq2"),
});
aboutTL
  .from(".navbar", { opacity: 0, y: "-80px" })
  .from(".seq0", { duration: 1, scale: 0, ease: "bounce" }, "<0")
  .from(".seq1", { opacity: 0, x: -200 })
  .from(".seq2", { opacity: 0, duration: 0.01 })
  .from(".seq2 h1", {
    opacity: 0,
    y: -100,
    stagger: {
      each: 0.05,
      from: "random",
    },
  })
  .from(".seq3", { opacity: 0, x: -200 })
  .from(
    ".right-side .card",
    { duration: 1, y: 50, opacity: 0, clipPath: "inset(0 0 100% 0)" },
    "<0"
  )
  .from(".scroll-down", { scale: 0, opacity: 0 }, "<1");

const scrollTL = gsap.timeline({
  onComplete: function () {
    this.restart();
  },
  defaults: { duration: 1, ease: "none" },
});
scrollTL
  .to(".scroll-down", { y: 15, ease: "bounce" })
  .to(".scroll-down", { duration: 0.15, y: 0, delay: 10 });

function bounceEffect(element) {
  let elem = document.getElementsByClassName(element);
  let elemLength = elem.length;
  for (let i = 0; i < elemLength; i++) {
    let childrenElemLength = elem[i].children.length;
    for (let j = 0; j < childrenElemLength; j++) {
      elem[i].children[j].addEventListener("mouseenter", function (e) {
        let target = e.target;
        gsap
          .timeline()
          .to(target, { y: -20, duration: 0.1 })
          .to(target, { y: 0, duration: 0.5, ease: "bounce" });
      });
    }
  }
}

// Skills Animation

const skillsTL = gsap.timeline({
  scrollTrigger: {
    trigger: ".skills",
    start: "top 80%",
    end: "bottom 80%",
  },
});

skillsTL
  .from(".skills-heading h1", {
    opacity: 0,
    y: -100,
    stagger: {
      each: 0.05,
      from: "random",
    },
    onComplete: bounceEffect("skills-heading"),
  })
  .from(".skills-desc", { x: 20, opacity: 0 }, "<0.5")
  .from(".proficient-anim", { x: -20, opacity: 0, stagger: 0.2 })
  .from(".intermediate-anim", { x: -20, opacity: 0, stagger: 0.2 }, "<.5")
  .from(".beginner-anim", { x: -20, opacity: 0, stagger: 0.2 }, "<1.5");

// Projects Animation

gsap
  .timeline({
    scrollTrigger: {
      trigger: ".projects",
      start: "top 80%",
      end: "top 80%",
    },
  })
  .from(".projects-heading h1", {
    opacity: 0,
    y: -100,
    stagger: {
      each: 0.05,
      from: "random",
    },
    onComplete: bounceEffect("projects-heading"),
  })
  .from(".projects-showcase", {
    opacity: 0,
  }, '<.5');

const projectsShowcase = document.querySelector(".projects-showcase");
const video = projectsShowcase.querySelector("video");

gsap.from(".projects", {
  scrollTrigger: {
    trigger: ".projects-showcase",
    scrub: true,
    start: "top top",
    end: "+=250%",
    pin: true,
  },
  onUpdate: function () {
    if (this.scrollTrigger.progress.toFixed(2) > 0.9) {
      video.currentTime = 2;
    } else {
      video.currentTime = this.scrollTrigger.progress.toFixed(2) * 2.1;
    }
  },
});

gsap.timeline({
  scrollTrigger: {
    trigger : ".projects-title",
    start : "top 80%",
    end: "top 80%"
  }
})

.from(".ucommerce-anim", { x: -20, opacity: 0, stagger: 0.1 })

gsap.timeline({
  scrollTrigger: {
    trigger: ".projects-image",
    start: "top 80%",
    end: "top 80%"
  }
})
.from(".covidtracker-anim", {x:-20, opacity: 0, stagger: 0.1})

//Contacts Animation

gsap
  .timeline({
    scrollTrigger: {
      trigger: ".contacts",
      start: "top 80%",
      end: "top 80%",
    },
  })
  .from(".contacts-heading h1", {
    opacity: 0,
    y: -100,
    stagger: {
      each: 0.05,
      from: "random",
    },
    onComplete: bounceEffect("contacts-heading"),
  })
  .from(".contacts-anim", {x:-20, opacity: 0, stagger: 0.1})


// Navbar Animation
const botnav = document.querySelector(".navbar2");
gsap.to(botnav, {
  scrollTrigger: {
    trigger: ".skills",
    start: "top top",
    end: "top top",
    scrub: 0.2,
  },
  y: "-70px",
});

// Skills Section
