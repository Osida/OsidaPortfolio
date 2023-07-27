"use client";
import React, {useEffect, useState} from "react";
import {socialLinks} from "@/constants";
import {motion, useAnimation} from "framer-motion";
import Link from "next/link";
import {linkVariants} from "@/components/client/nav/Nav";
import {ThemeToggleButton} from "@/components/client/theme/ThemeToggleButton";

const Banner = () => {
    const controls = useAnimation();
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        controls.start({opacity: 1, y: 0, transition: {duration: 0.8, ease: "easeInOut"}});
        setIsLoaded(true);
    }, []);

    return (
        <motion.article
            initial={{opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : -50}}
            animate={controls}
            className="bg-blue-2000 w-full container pt-5 flex flex-col justify-center items-center lg:flex-row lg:items-end lg:justify-between ">
            <Link href={"/"}>
                <h3 className="font-roboto text-h3 font-h3 cursor-pointer">
                    <span className="font-bold">Osida</span> Richards<span className="text-accent">.</span>
                </h3>
            </Link>

            <div className="space-x-3 flex items-center">
                {socialLinks.map(({path, name, Icon}) => (
                    <motion.li
                        key={name}
                        variants={linkVariants}
                        whileTap="tap"
                        whileHover="hover"
                        className="btn btn-ghost"
                    >
                        <Link href={path}>{Icon}</Link>
                    </motion.li>
                ))}
                <ThemeToggleButton styles={"nav-icon"}/>
            </div>
        </motion.article>
    );
};

export default Banner;
