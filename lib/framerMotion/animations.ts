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


const navLinkTransition = {duration: 0.05, ease: "easeInOut"};

export const navLinkVariants = {
    initial: {scale: 1},
    hover: {scale: 1.1, transition: navLinkTransition},
    tap: {scale: 0.9, transition: navLinkTransition},
};

export const bannerLinkVariants = {
    ...navLinkVariants,
};