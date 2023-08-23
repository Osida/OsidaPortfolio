"use client";
import React from "react";
import Link from "next/link";
import {motion} from "framer-motion";
import {navLinks} from "@/constants";
import {navLinkVariants} from "@/lib/framerMotion/animations";
import {NavLinkSchema} from "@/constants/links";
import {navMotionStyles, transition} from "@/components/client/nav/motionStyles";

const Nav = () => {
    return (
        <motion.nav
            initial={navMotionStyles.initial}
            animate={navMotionStyles.animate}
            transition={transition}
            className={`backdrop-blur-sm bg-secondary/30 z-50 fixed bottom-0 left-0 right-0 py-3 lg:max-w-3xl lg:mx-auto lg:rounded-full lg:shadow-lg lg:bottom-4`}
            data-cy="nav-container"
        >
            <ul className="bg-red-2000 w-full h-full flex items-center justify-between px-2 sm:px-4 md:px-0 md:justify-evenly"
                data-cy="nav-list">
                {navLinks.map(({path, name, Icon}: NavLinkSchema, _) => (
                    <Link key={name} href={path} data-cy={`nav-link-container-${name}`}>
                        <motion.li
                            variants={navLinkVariants}
                            whileTap="tap"
                            className="cursor-pointer"
                            data-cy={`nav-link-${name}`}
                        >
                            <span className="bg-green-5000  flex flex-col items-center"
                                  data-cy={`nav-link-content-${name}`}>
                                <span data-cy={`nav-link-icon-${name}`}>{Icon}</span>
                                <p className=" mt-1 -bottom-4 text-[0.6rem] lg:-bottom-5 lg:text-xs"
                                   data-cy={`nav-link-text-${name}`}>{name}</p>
                            </span>
                        </motion.li>
                    </Link>
                ))}
            </ul>
        </motion.nav>
    );
};


export default Nav;
