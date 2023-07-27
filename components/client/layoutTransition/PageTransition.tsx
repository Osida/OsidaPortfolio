"use client";
import React, {ReactNode} from "react";
import {AnimatePresence, motion} from "framer-motion";

const PageTransition = ({path, children}: { path: string, children: ReactNode }) => {
    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={path}
                initial={{opacity: 0, x: 100}}
                animate={{opacity: 1, x: 0}}
                exit={{opacity: 0, x: -100}}
                transition={{duration: 0.8, ease: "easeInOut"}}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    );
};

export default PageTransition;
