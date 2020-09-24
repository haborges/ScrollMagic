gsap.registerPlugin(MotionPathPlugin);

const tween = gsap.timeline();
tween.to(".paper-plane", {
  duration: 3,
  ease: "power1.inOut",
  motionPath: {
    path: [
        {x: 100, y: -80},
        {x: window.innerWidth, y: -250}
    ], 
    curviness: 2,
    autoRotate: false
  }
});

const controller = new ScrollMagic.Controller();
const scene = new ScrollMagic.Scene({
triggerElement: '.animation',
duration: 1000,
triggerHook: 0
})
.setTween(tween)
.setPin('.animation')
.addTo(controller);

