/**
* ----------------------------------------------
* Particle JS configuraion
* ----------------------------------------------
*/
particlesJS("particles", {
"particles": {
    "number": {
    "value": 5,
    "density": {
        "enable": true,
        "value_area": 700
    }
    },
    "color": {
    "value": ["#ffffff","#ff0080","#ff0000","#00ff00"]
    },
    "shape": {
    "type": "image",
    "stroke": {
        "width": 1,
        "color": "#fff"
    },
    "polygon": {
        "nb_sides": 5
    },
     "image":{
        "src": "./assets/images/icon.png",
        "width": 110,
        "height": 100
    }
    },
    "opacity": {
    "value": 0.5,
    "random": false,
    "anim": {
        "enable": false,
        "speed": 6,
        "opacity_min": 0.1,
        "sync": true
    }
    },
    "size": {
    "value": 30,
    "random": true,
    "anim": {
        "enable": false,
        "speed": 80,
        "size_min": 0.1,
        "sync": false
    }
    },
    "line_linked": {
    "enable": false,
    "distance": 150,
    "color": "#ffffff",
    "opacity": 0.4,
    "width": 1
    },
    "move": {
    "enable": true,
    "speed": 3,
    "direction": "left",
    "random": false,
    "straight": true,
    "out_mode": "out",
    "bounce": true,
    "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
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
        "mode": "push"
    },
    "resize": true
    },
    "modes": {
    "grab": {
        "distance": 140,
        "line_linked": {
        "opacity": 1
        }
    },
    "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
    },
    "repulse": {
        "distance": 200,
        "duration": 0.4
    },
    "push": {
        "particles_nb": 4
    },
    "remove": {
        "particles_nb": 2
    }
    }
},
"retina_detect": true
});
