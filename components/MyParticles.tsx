import React from "react";
import Particles from "react-tsparticles";

const particlesConfig = {
    particles: {
        number: {
            value: 50,
        },
        size: {
            value: 3,
        },
        color: {
            value: "#ff0000"
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

const MyComponent = () => {
    return (
        <div className={"relative min-w-screen min-h-screen"}>
            <Particles
                id={"particles"}
                style={{
                    position: "absolute",
                    zIndex: 9999,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    top: 0,
                }}
                params={particlesConfig}
            />
        </div>
    );
};

export default MyComponent;
