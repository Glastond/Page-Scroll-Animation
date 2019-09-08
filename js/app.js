const flightPath = {
  curviness: 1.25,
  autoRotate: true,
  values: [
    { x: 100, y: -20 },
    { x: 300, y: 10 },
    { x: 500, y: 5 },
    { x: 750, y: -100 },
    { x: 350, y: -50 },
    { x: 600, y: 100 },
    { x: 800, y: 0 },
    { x: window.innerWidth, y: -100 }
  ]
};

// const tween = new TimelineLite();

// tween.add(
//   TweenLite.to(".paper-plane", 1, {
//     bezier: flightPath,
//     ease: Power1.easeInOut
//   })
// );

const tl = new TimelineLite();

tl.to(".paper-plane", 5, {
  bezier: flightPath,
  ease: Power1.easeInOut
});

const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
  triggerElement: ".animation",
  duration: 2000,
  triggerHook: 0
})
  .setTween(tl)
  .addIndicators()
  .setPin(".animation")
  .addTo(controller);
