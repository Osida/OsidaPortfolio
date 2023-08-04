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
            className={`z-50 fixed bottom-0 left-0 right-0 py-2 shadow-xl bg-gray-800 ease-in-out duration-500 transition-al lg:max-w-3xl lg:mx-auto lg:rounded-full lg:droop-shadow-md lg:bottom-4`}
        >
            <ul className="w-full h-full flex items-center justify-evenly">
                {navLinks.map(({path, name, Icon}: NavLinkSchema, _) => (
                    <Link key={name} href={path}>
                        <motion.li
                            variants={navLinkVariants}
                            whileTap="tap"
                            className="btn btn-ghost"
                        >
                            <span className="flex flex-col items-center">
                                <p className="hidden text-xs">{name}</p>
                                {Icon}
                            </span>
                        </motion.li>
                    </Link>
                ))}
            </ul>
        </motion.nav>
    );
};

export default Nav;
