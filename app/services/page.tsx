"use client";
import React from "react";
import {FaReact} from "react-icons/fa";
import {images} from "@/public";
import {motion} from "framer-motion";

const Services = () => {
    const cardVariants = {
        hover: {y: -10, scale: 1.02, transition: {duration: 0.2}},
        initial: {y: 0, scale: 1.0, transition: {duration: 0.2}}
    };

    return (
        <main className="container">
            <h1 className="text-3xl font-bold text-center lg:text-left mt-20 mb-5 lg:max-w-md">
                My <span className="text-red-600">Services</span>
            </h1>

            <p className="mx-auto text-center max-w-xl lg:text-left lg:max-w-2xl lg:ml-0">
                lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
            </p>

            {/* card container*/}
            <section
                className="bg-blue-500 p-3 mt-16 mb-32 mx-auto space-y-10 md:max-w-3xl md:grid md:space-y-0 md:gap-10 md:grid-cols-2 lg:mx-0 lg:max-w-6xl lg:grid-cols-3">
                {
                    [0, 1, 2, 3, 4, 5, 6, 7].map((_, i) => (
                        // card component
                        <motion.div
                            key={i}
                            variants={cardVariants}
                            whileHover="hover"
                            initial="initial"
                            className="card mx-auto max-w-xs bg-base-100 shadow-xl break-inside-avoid-auto lg:mx-0 relative"
                        >
                            <figure className="relative">
                                <img src={images.service1.src} alt="service1" className="w-full h-full object-contain"/>
                                <div
                                    className="absolute top-0 left-0 w-full h-full bg-gray-800 opacity-0 hover:opacity-60 transition-opacity duration-300 flex items-center justify-center">
                                    {/*<Link href="https://reactjs.org/">*/}
                                    <a target="_blank">
                                        <FaReact size={48} className="text-white"/>
                                    </a>
                                    {/*</Link>*/}
                                </div>
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">Frontend Development</h2>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                    do eiusmod tempor incididunt ut labore.
                                </p>
                                <p>
                                    #Lorem #ipsum #dolor
                                </p>
                                <div className="card-actions justify-end mt-5">
                                    <button className="btn btn-sm btn-primary">Code</button>
                                    <button className="btn btn-sm btn-primary">Live</button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
            </section>
        </main>
    );
};

export default Services;
