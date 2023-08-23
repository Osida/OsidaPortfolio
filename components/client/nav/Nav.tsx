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
            className={`backdrop-blur-sm bg-secondary/30 z-50 fixed bottom-0 left-0 right-0 py-2 lg:max-w-3xl lg:mx-auto lg:rounded-full lg:shadow-lg lg:bottom-4`}
            data-cy="nav-container"
        >
            <ul className="w-full h-full flex items-center justify-evenly" data-cy="nav-list">
                {navLinks.map(({path, name, Icon}: NavLinkSchema, _) => (
                    <Link key={name} href={path} data-cy={`nav-link-container-${name}`}>
                        <motion.li
                            variants={navLinkVariants}
                            whileTap="tap"
                            className="btn btn-ghost"
                            data-cy={`nav-link-${name}`}
                        >
                            <span className="flex flex-col items-center" data-cy={`nav-link-content-${name}`}>
                                <span data-cy={`nav-link-icon-${name}`}>{Icon}</span>
                                {/*<p className="text-[8px]" data-cy={`nav-link-text-${name}`}>{name}</p>*/}
                            </span>
                        </motion.li>
                    </Link>
                ))}
            </ul>
        </motion.nav>
    );
};


export default Nav;
