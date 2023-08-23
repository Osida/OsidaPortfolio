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
            className="w-full container pt-5 flex flex-col justify-center items-center lg:flex-row lg:items-end lg:justify-between"
            data-cy="banner-container"
        >
            <Link href={"/"}>
                <h4 data-cy="banner-title">
                    {title}
                    <span className="text-accent1" data-cy="banner-title-dot">.</span>
                </h4>
            </Link>

            <div className="space-x-3 flex items-center" data-cy="banner-social-links">
                {socialLinks.map(({path, name, Icon}, _) => (
                    <motion.li
                        key={name}
                        variants={bannerLinkVariants}
                        whileTap="tap"
                        whileHover="hover"
                        className="btn btn-ghost"
                        data-cy={`social-link-${name}`}
                    >
                        <a href={path} target="_blank" rel="noopener noreferrer" data-cy={`social-link-icon-${name}`}>
                            {Icon}
                        </a>
                    </motion.li>
                ))}

                <motion.div
                    variants={bannerLinkVariants}
                    whileTap="tap"
                    whileHover="hover"
                    data-cy="theme-toggle"
                >
                    <ThemeToggle styles={"nav-icon"}/>
                </motion.div>
            </div>
        </motion.article>
    );
};

export default Banner;
