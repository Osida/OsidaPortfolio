"use client";
import React from "react";
import {FaReact} from "react-icons/fa";
import {images} from "@/public";
import {motion} from "framer-motion";

const Skills = () => {
    const cardVariants = {
        hover: {y: -10, scale: 1.02, transition: {duration: 0.2}},
        initial: {y: 0, scale: 1.0, transition: {duration: 0.2}}
    };

    return (
        <main className="container">
            <h1 className="text-3xl font-bold text-center lg:text-left mt-20 mb-5 lg:max-w-md">
                My <span className="text-red-600">Skills</span>
            </h1>

            {/*<p className="mx-auto text-center max-w-xl lg:text-left lg:max-w-2xl lg:ml-0">*/}
            {/*    lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore*/}
            {/*    et*/}
            {/*    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.*/}
            {/*</p>*/}

            {/* card container*/}
            <section
                className="bg-blue-500 p-3 mt-16 mb-32 mx-auto space-y-10 md:max-w-3xl md:grid md:space-y-0 md:gap-10 md:grid-cols-2 lg:mx-0 lg:max-w-6xl lg:grid-cols-3">

            </section>
        </main>
    );
};

export default Skills;
