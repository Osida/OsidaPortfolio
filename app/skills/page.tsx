"use client";
import React from "react";
import Image from "next/image";
import {motion} from "framer-motion";
import {images} from "@/public";
import PageTransition from "@/components/client/layoutTransition/PageTransition";
import {animations} from "@/utils/client";
import {Typewriter} from "react-simple-typewriter";
import {useQuery} from "@tanstack/react-query";
import axios from "axios";
import {SkillsData} from "@/types";

const Skills = () => {
    const staggerVariants = {
        hidden: {opacity: 0},
        visible: {opacity: 1},
    };

    const fetchSkills = async () => {
        const {data, status} = await axios.get("/api/skills");
        if (status !== 200) throw new Error("Error fetching skills");
        return data;
    };

    const {isLoading, isError, data, error} = useQuery<SkillsData>({
        queryKey: ["skills"],
        queryFn: fetchSkills,
    });

    return (
        <PageTransition path={"/skills"}>
            <main className="container mt-24 mb-40">
                <motion.h1
                    variants={animations.headingVariants}
                    initial="hidden"
                    animate="visible"
                    className="font-roboto text-h1 font-h1 text-center lg:text-left mb-5 lg:max-w-xl"
                >
                    My
                    <span className="text-primary">
                        <Typewriter
                            words={["", " Skills"]}
                            cursor
                            cursorStyle="_"
                            typeSpeed={150}
                            deleteSpeed={100}
                            delaySpeed={1000}
                        />
                    </span>
                </motion.h1>

                <motion.p
                    variants={animations.paragraphVariants}
                    initial="hidden"
                    animate="visible"
                    className="font-open-sans text-body1 font-body1 mx-auto text-center max-w-xl lg:text-left lg:max-w-2xl lg:ml-0"
                >
                    lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et
                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
                </motion.p>

                <section
                    className="bg-blue-5000 p-3 mt-16 mb-32 mx-auto md:max-w-3xl grid gap-x-0 gap-y-10 grid-cols-3 lg:max-w-3xl lg:ml-0 lg:grid-cols-6"
                >
                    {Array(25).fill(0).map((_, i) => (
                        <motion.div
                            key={i}
                            className="bg-yellow-3000 flex items-center justify-center rounded-full w-fit h-fit"
                            variants={staggerVariants}
                            initial="hidden"
                            animate="visible"
                            transition={{duration: 0.7, delay: i * 0.3}}
                            whileHover={{
                                scale: 1.2,
                                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                                transition: {duration: 0.25, ease: "easeInOut"}
                            }}
                        >
                            <Image src={images.reactIcon.src} alt={"react"} width={150} height={150}/>
                        </motion.div>
                    ))}
                </section>
            </main>
        </PageTransition>
    );
};

export default Skills;
