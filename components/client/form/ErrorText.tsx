import React, {ReactNode} from "react";
import {motion} from "framer-motion";

interface ErrorTextSchema {
    children: ReactNode;
    style?: string;
}

export const errorTextVariants = {
    initial: {opacity: 0, y: -20},
    animate: {opacity: 1, y: 0},
    exit: {opacity: 0, y: -20},
};

const ErrorText = ({children, style}: ErrorTextSchema) => {
    return (
        <motion.p
            variants={errorTextVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{duration: 0.3, ease: "easeInOut"}}
            className={`mt-1 ml-1 w-full max-w-xl lg:max-w-2xl text-error body2 ${style}`}
            role="alert"
        >
            {children}
        </motion.p>
    );
};

export default ErrorText;
