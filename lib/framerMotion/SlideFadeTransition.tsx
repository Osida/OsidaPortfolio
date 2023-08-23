"use client";
import React, {ReactNode} from "react";
import {AnimatePresence, motion} from "framer-motion";

interface PageFadeAndSlideTransitionProps {
    path: string;
    children: ReactNode;
}

const pageVariants = {
    initial: {opacity: 0, x: 100},
    animate: {opacity: 1, x: 0},
    exit: {opacity: 0, x: -100},
};

const pageTransition = {duration: 0.8, ease: "easeInOut"};

const SlideFadeTransition = ({path, children}: PageFadeAndSlideTransitionProps) => {
    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={path}
                initial={pageVariants.initial}
                animate={pageVariants.animate}
                exit={pageVariants.exit}
                transition={pageTransition}
                data-cy="slide-fade-transition"
            >
                {children}
            </motion.div>
        </AnimatePresence>
    );
};

export default SlideFadeTransition;
