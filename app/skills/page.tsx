"use client";
import React from "react";
import Image from "next/image";
import {motion} from "framer-motion";
import PageTransition from "@/components/client/layoutTransition/PageTransition";
import {animations} from "@/utils/client";
import {Typewriter} from "react-simple-typewriter";
import {useQuery} from "@tanstack/react-query";
import axios from "axios";
import {urlForImage} from "@/sanity/lib/image";
import {usePathname} from "next/navigation";
import {endpoints} from "@/constants";

const Skills = () => {
    const pathName = usePathname();

    const staggerVariants = {
        hidden: {opacity: 0},
        visible: {opacity: 1},
    };

    const fetchSkills = async () => {
        const {data, status} = await axios.get<SkillData[]>(endpoints.skills);
        if (status !== 200) throw new Error("Error fetching skills");
        return data;
    };

    const {isLoading, isError, data, error} = useQuery<SkillData[]>({
        queryKey: ["skills"],
        queryFn: fetchSkills,
    });

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError && error) {
        // @ts-ignore
        return <div>Error: {error?.message}</div>;
    }

    return (
        <PageTransition path={pathName}>
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
                    className="bg-blue-5000 p-3 mt-16 mb-32 mx-auto md:max-w-3xl grid gap-10 grid-cols-2 md:grid-cols-3 lg:max-w-3xl lg:ml-0 lg:gap-y-20 lg:grid-cols-6"
                >
                    {data && data.map((skill, i) => (
                        <motion.div
                            key={skill._id}
                            className="relative mx-auto bg-yellow-3000 flex items-center justify-center rounded-full w-20 h-20 md:w-24 md:h-24"
                            variants={staggerVariants}
                            initial="hidden"
                            animate="visible"
                            transition={{duration: 0.3, delay: i * 0.3, ease: "easeInOut"}}
                            whileHover={{
                                scale: 1.2,
                                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                                // transition: {duration: 0.1, ease: "easeInOut"}
                            }}
                        >
                            <p className="absolute -top-5 text-xs font-bold text-center w-full">
                                {skill.skillName}
                            </p>
                            <Image
                                src={urlForImage(skill.image.asset)?.url()}
                                alt={"react"}
                                fill={true}
                                // width={90}
                                // height={90}
                                className={"rounded-full object-contain"}
                            />
                        </motion.div>
                    ))}
                </section>
            </main>
        </PageTransition>
    );
};

export default Skills;
