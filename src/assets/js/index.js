function name() {
  particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 1200,
        "density": {
          "enable": true,
          "value_area": 1200
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 1,
          "color": "#ffffff"
        },
        "polygon": {
          "nb_sides": 5,
          "color": "#ffffff"
        },
        "image": {
          "src": "./img/1.jpeg",
          "width": 1,
          "height": 1
        }
      },
      "opacity": {
        "value": 0.9864345520403408,
        "random": true,
        "anim": {
          "enable": true,
          "speed": 5,
          "opacity_min": 0.1,
          "sync": true
        }
      },
      "size": {
        "value": 0.8,
        "random": true,
        "anim": {
          "enable": true,
          "speed": 1,
          "size_min": 0.1,
          "sync": true
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 0,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 3,
        "direction": "random",
        "random": true,
        "straight": false,
        "out_mode": "bounce",
        "bounce": true,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 600
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "grab"
        },
        "onclick": {
          "enable": true,
          "mode": "repulse"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 0.2
          }
        },
        "bubble": {
          "distance": 400,
          "size": 4,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 250,
          "duration": 10,
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": false
  });
}

// This is for navbar
function NavBar() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// Thisis end of navbar
function animation() {
  const scrollElements = document.querySelectorAll(".js-scroll");
  const elementInView = (el, dividend = 1) => {
    const elementTop = el.getBoundingClientRect().top;
    return (
      elementTop <=
      (window.innerHeight || document.documentElement.clientHeight) / dividend
    );
  };
  const elementOutofView = (el) => {
    const elementTop = el.getBoundingClientRect().top;
    return (
      elementTop > (window.innerHeight || document.documentElement.clientHeight)
    );
  };
  const displayScrollElement = (element) => {
    element.classList.add("scrolled");
  };

  const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
      if (elementInView(el, 1.25)) {
        displayScrollElement(el);
      } else if (elementOutofView(el)) {}
    })
  }

  window.addEventListener("scroll", () => {
    handleScrollAnimation();
  });
}

function animation2() {
  const scrollElements = document.querySelectorAll(".js-scroll");
  const elementInView = (el, dividend = 1) => {
    const elementTop = el.getBoundingClientRect().top;
    return (
      elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend);
  };
  const displayScrollElement = (element) => {
    element.classList.add("scrolled");
  }
  const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
      if (elementInView(el, 2.5)) {
        displayScrollElement(el);
      }
    })
  }
  window.addEventListener("scroll", () => {
    handleScrollAnimation();
  });
}


// This is for Cursor 
const updateProperties = (elem, state) => {
  elem.style.setProperty('--x', `${state.x}px`)
  elem.style.setProperty('--y', `${state.y}px`)
  elem.style.setProperty('--width', `${state.width}px`)
  elem.style.setProperty('--height', `${state.height}px`)
  elem.style.setProperty('--radius', state.radius)
  elem.style.setProperty('--scale', state.scale)
}
document.querySelectorAll('.cursor').forEach(cursor => {
  let onElement
  const createState = e => {
    const defaultState = {
      x: e.clientX,
      y: e.clientY,
      width: 30,
      height: 30,
      radius: '100%'
    }
    const computedState = {}
    if (onElement != null) {
      const {
        top,
        left,
        width,
        height
      } = onElement.getBoundingClientRect()
      const radius = window.getComputedStyle(onElement).borderTopLeftRadius
      computedState.x = left + width / 2
      computedState.y = top + height / 2
      computedState.width = width
      computedState.height = height
      computedState.radius = radius
    }
    return {
      ...defaultState,
      ...computedState
    }
  }

  document.addEventListener('mousemove', e => {
    const state = createState(e)
    updateProperties(cursor, state)
  })
  document.querySelectorAll('a, button').forEach(elem => {
    elem.addEventListener('mouseenter', () => (onElement = elem))
    elem.addEventListener('mouseleave', () => (onElement = undefined))
  })
})

// This is For Crousel
function crousel() {
  const lerp = (f0, f1, t) => (1 - t) * f0 + t * f1;
  const clamp = (val, min, max) => Math.max(min, Math.min(val, max));
  class DragScroll {
    constructor(obj) {
      this.$el = document.querySelector(obj.el);
      this.$wrap = this.$el.querySelector(obj.wrap);
      this.$items = this.$el.querySelectorAll(obj.item);
      this.$bar = this.$el.querySelector(obj.bar);
      this.init();
    }
    init() {
      this.progress = 0;
      this.speed = 0;
      this.oldX = 0;
      this.x = 0;
      this.playrate = 0;
      this.bindings();
      this.events();
      this.calculate();
      this.raf();
    }
    bindings() {
      [
        'events',
        'calculate',
        'raf',
        'handleWheel',
        'move',
        'raf',
        'handleTouchStart',
        'handleTouchMove',
        'handleTouchEnd'
      ].
      forEach(i => {
        this[i] = this[i].bind(this);
      });
    }
    calculate() {
      this.progress = 0;
      this.wrapWidth = this.$items[0].clientWidth * this.$items.length;
      this.$wrap.style.width = `${this.wrapWidth}px`;
      this.maxScroll = this.wrapWidth - this.$el.clientWidth;
    }
    handleWheel(e) {
      this.progress += e.deltaY;
      this.move();
    }
    handleTouchStart(e) {
      e.preventDefault();
      this.dragging = true;
      this.startX = e.clientX || e.touches[0].clientX;
      this.$el.classList.add('dragging');
    }
    handleTouchMove(e) {
      if (!this.dragging) return false;
      const x = e.clientX || e.touches[0].clientX;
      this.progress += (this.startX - x) * 2.5;
      this.startX = x;
      this.move();
    }
    handleTouchEnd() {
      this.dragging = false;
      this.$el.classList.remove('dragging');
    }
    move() {
      this.progress = clamp(this.progress, 0, this.maxScroll);
    }
    events() {
      window.addEventListener('resize', this.calculate);
      //
      this.$el.addEventListener('touchstart', this.handleTouchStart);
      window.addEventListener('touchmove', this.handleTouchMove);
      window.addEventListener('touchend', this.handleTouchEnd);
      //
      window.addEventListener('mousedown', this.handleTouchStart);
      window.addEventListener('mousemove', this.handleTouchMove);
      window.addEventListener('mouseup', this.handleTouchEnd);
      document.body.addEventListener('mouseleave', this.handleTouchEnd);
    }
    raf() {
      // requestAnimationFrame(this.raf)
      this.x = lerp(this.x, this.progress, 0.1);
      this.playrate = this.x / this.maxScroll;
      //
      this.$wrap.style.transform = `translateX(${-this.x}px)`;
      this.$bar.style.transform = `scaleX(${.18 + this.playrate * .82})`;
      //
      this.speed = Math.min(100, this.oldX - this.x);
      this.oldX = this.x;
      //
      this.scale = lerp(this.scale, this.speed, 0.1);
      this.$items.forEach(i => {
        i.style.transform = `scale(${1 - Math.abs(this.speed) * 0.002})`;
        i.querySelector('img').style.transform = `scaleX(${1 + Math.abs(this.speed) * 0.004})`;
      });
    }
  }
  /*--------------------
  Instances
  --------------------*/
  const scroll = new DragScroll({
    el: '.carousel',
    wrap: '.carousel--wrap',
    item: '.carousel--item',
    bar: '.carousel--progress-bar'
  });

  /*--------------------
  One raf to rule em all
  --------------------*/
  const raf = () => {
    requestAnimationFrame(raf);
    scroll.raf();
  };
  raf();

}


function fill() {
  $(function () {
    var filterList = {
      init: function () {
        // MixItUp plugin
        // http://mixitup.io
        $('.portfolio-grid').mixItUp({
          selectors: {
            target: '.portfolio',
            filter: '.filter'
          },
          load: {
            filter: 'all' // show app tab on first load
          }
        });
      }
    };
    // Run the show!
    filterList.init();
  });
}
