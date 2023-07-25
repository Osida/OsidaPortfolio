"use client";
import React, {ReactNode} from "react";
import {AnimatePresence, motion} from "framer-motion";

const layoutVariants = {
    initial: {opacity: 0, x: "-100%"},
    animate: {opacity: 1, x: 0, transition: {duration: 0.8}},
    exit: {opacity: 0, x: "100%", transition: {duration: 0.8}},
};

const LayoutTransition = ({currentPathname, children}: { currentPathname: string, children: ReactNode }) => {
    return (
        <motion.div
            key={currentPathname}
            variants={layoutVariants}
            initial="initial"
            animate="animate"
            exit="exit"
        >
            <AnimatePresence mode="wait">
                {children}
            </AnimatePresence>
        </motion.div>
    );
};

export default LayoutTransition;
