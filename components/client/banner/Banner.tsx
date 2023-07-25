"use client";
import React from "react";
import {socialLinks} from "@/constants";
import {motion} from "framer-motion";
import Link from "next/link";
import {linkVariants} from "@/components/client/nav/Nav";

const Banner = () => {
    return (
        <article
            className="bg-blue-2000 w-full container pt-5 flex flex-col lg:flex-row justify-center items-center lg:justify-between space-y-3">
            <Link href={"/"}>
                <h3 className="text-4xl cursor-pointer">
                    <span className="font-bold">Osida</span> Richards<span className="text-red-600">.</span>
                </h3>
            </Link>

            <div className="space-x-3">
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
            </div>
        </article>
    );
};

export default Banner;
