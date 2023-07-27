export const animations = {
    headingVariants: {
        hidden: {opacity: 0},
        visible: {
            opacity: 1,
            transition: {duration: 1, delay: 0.5, ease: "easeInOut"},
        },
    },
    paragraphVariants: {
        hidden: {opacity: 0, y: 20},
        visible: {opacity: 1, y: 0, transition: {duration: 1, delay: 1, ease: "easeInOut"}},
    },
    cardVariants: {
        hover: {y: -10, scale: 1.02, transition: {duration: 0.2, ease: "easeInOut"}},
        initial: {y: 0, scale: 1.0, transition: {duration: 0.2, ease: "easeInOut"}}
    },
    imageVariants: {
        hidden: {y: "100vh", opacity: 0},
        visible: {
            y: 0,
            opacity: 1,
            transition: {duration: 1.5, ease: "easeOut"}
        },
        hover: {
            scale: [1, 1.03, 1],
            y: ["0%", "-2%", "0%"],
            opacity: 1,
            transition: {duration: 5, repeat: Infinity}
        }
    }
};

export const headerTaglines = [
    " ",
    " ",
    " Turning Concepts Into Code",
    " Breathing Life Into Virtual Vision",
    " Fostering Ideation into Interactive Experiences",
    " Shaping Thoughts into Technological Terrain",
    " Evoking Imagination into Digital Domains",
    " Crafting Innovations in the Pixel Playground",
    " Converting Blueprints into Binary Brilliance",
    " Cultivating Creativity into Cyberspace Constructs",
    " Molding Dreams into Digital Dynamics",
    " Carving Ideas into the Canvas of Code"
];