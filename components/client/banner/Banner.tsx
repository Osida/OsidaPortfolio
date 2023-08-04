"use client";
import Link from "next/link";
import React, {useEffect, useState} from "react";
import {motion, useAnimation} from "framer-motion";
import {socialLinks} from "@/constants";
import {bannerLinkVariants} from "@/lib/framerMotion/animations";
import {ThemeToggle} from "@/components/client/theme/ThemeToggle";
import {bannerMotionStyles, transition} from "@/components/client/banner/motionStyles";

interface BannerProps {
    title: string;
}

const Banner = ({title}: BannerProps) => {
    const controls = useAnimation();
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        controls.start({...bannerMotionStyles.animate});
        setIsLoaded(true);
    }, [controls]);

    return (
        <motion.article
            initial={{opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : -50}}
            animate={controls}
            transition={transition}
            className="bg-blue-2000 w-full container pt-5 flex flex-col justify-center items-center lg:flex-row lg:items-end lg:justify-between">

            <Link href={"/"}>
                <h3 className="font-roboto font-h3 text-xl cursor-pointer">
                    {title}<span className="text-accent">.</span>
                </h3>
            </Link>

            <div className="space-x-3 flex items-center">
                {socialLinks.map(({path, name, Icon}, _) => (
                    <motion.li
                        key={name}
                        variants={bannerLinkVariants}
                        whileTap="tap"
                        whileHover="hover"
                        className="btn btn-ghost"
                    >
                        <a href={path} target="_blank" rel="noopener noreferrer">{Icon}</a>
                    </motion.li>
                ))}

                <ThemeToggle styles={"nav-icon"}/>
            </div>
        </motion.article>
    );
};

export default Banner;
