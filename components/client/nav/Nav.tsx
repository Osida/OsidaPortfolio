"use client";
import React, {useEffect, useState} from "react";
import Link from "next/link";
import {navLinks} from "@/constants";
import {motion} from "framer-motion";

export const linkTransition = {duration: 0.05, ease: "easeInOut"};

export const linkVariants = {
    initial: {scale: 1},
    hover: {scale: 1.1, transition: linkTransition},
    tap: {scale: 0.9, transition: linkTransition},
};

const Nav = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    // nav: fixed bottom-0 w-full px-2 py-2 z-50 opacity-10 hover:opacity-100 hover:bg-gray-950 ease-in-out duration-300 transition-opacity lg:right-5 lg:w-auto lg:top-1/2 lg:transform lg:-translate-y-1/2 lg:pr-2 lg:rounded-xl lg:opacity-70 lg:mb-20
    // ul: bg-blue-1000 flex items-center justify-evenly space-x-5 lg:h-full lg:flex-col lg:space-y-10 lg:space-x-0 lg:rounded-xl
    return (
        <>
            {isLoaded && (
                <motion.nav
                    initial={{opacity: 0.7, y: 50}}
                    animate={{opacity: 1, y: 0, transition: {duration: 0.8, ease: "easeInOut"}}}
                    // exit={{opacity: 0, y: 50, transition: {duration: 0.8, ease: "easeInOut"}}}
                    // whileHover={{backgroundColor: "#030712", transition: {duration: 0.05, ease: "easeInOut"}}}
                    className="bg-blue-3000 z-50 fixed bottom-0 left-0 right-0 py-2 lg:rounded-full hover:bg-base-100 ease-in-out duration-500 transition-all lg:py-8 lg:w-20 lg:flex lg:flex-col lg:left-auto lg:bottom-5 lg:top-auto lg:right-7">
                    <ul className="bg-yellow-3000 w-full h-full flex items-center justify-evenly lg:rounded-full lg:flex-col lg:space-y-10">
                        {navLinks.map(({path, name, Icon}) => (
                            <Link key={name} href={path}>
                                <motion.li
                                    variants={linkVariants}
                                    whileTap="tap"
                                    whileHover="hover"
                                    className="btn btn-ghost"
                                >
                                    {Icon}
                                </motion.li>
                            </Link>
                        ))}
                    </ul>
                </motion.nav>
            )}
        </>
    );
};

export default Nav;
