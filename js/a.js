particlesJS("particles-js", {
  particles: {
    number: { value: 50, density: { enable: false, value_area: 1360 } },
    color: { value: "#5e9a8e" },
    shape: {
      type: "circle",
      stroke: { width: 0, color: "#5e9a8e" },
      polygon: { nb_sides: 5 },
      image: { src: "img/github.svg", width: 100, height: 100 },
    },
    opacity: {
      value: 0.24051180912982842,
      random: false,
      anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false },
    },
    size: {
      value: 3,
      random: false,
      anim: { enable: false, speed: 40, size_min: 0.1, sync: false },
    },
    line_linked: {
      enable: true,
      distance: 224.4776885211732,
      color: "#5e9a8e",
      opacity: 0.4,
      width: 1.9240944730386271,
    },
    move: {
      enable: true,
      speed: 6,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 3046.4829156444935,
        rotateY: 3367.1653278175977,
      },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "repulse" },
      onclick: { enable: false, mode: "push" },
      resize: true,
    },
    modes: {
      grab: {
        distance: 73.08279468606884,
        line_linked: { opacity: 0.9871505898224783 },
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 3.2481242082697266,
        opacity: 0.2436093156202295,
        speed: 3,
      },
      repulse: { distance: 105.56403676876612, duration: 0.4 },
      push: { particles_nb: 4 },
      remove: { particles_nb: 2 },
    },
  },
  retina_detect: true,
});
var count_particles, stats, update;
stats = new Stats();
stats.setMode(0);
stats.domElement.style.position = "absolute";
stats.domElement.style.left = "0px";
stats.domElement.style.top = "0px";
document.body.appendChild(stats.domElement);
count_particles = document.querySelector(".js-count-particles");
update = function () {
  stats.begin();
  stats.end();
  if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
    count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
  }
  requestAnimationFrame(update);
};
requestAnimationFrame(update);
