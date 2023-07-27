import React from "react";
import Particles from 'react-tsparticles';


const particlesConfig = {
    particles: {
        number: {
            value: 50,
        },
        size: {
            value: 3,
        },
    },
    interactivity: {
        events: {
            onhover: {
                enable: true,
                mode: "repulse",
            },
        },
    },
};


const ParticlesEffect = () => {
    return (
        <div>

        </div>
    );
};

export default ParticlesEffect;
