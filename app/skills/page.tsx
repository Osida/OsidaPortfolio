"use client";
import React, {useMemo} from "react";
import {motion} from "framer-motion";
import {Typewriter} from "react-simple-typewriter";
import {usePathname} from "next/navigation";
import {animations, SlideFadeTransition} from "@/lib";
import {useSkills} from "@/hooks";
import {SkillItem} from "@/components/client";
import {DataFetchingError} from "@/utils/exceptions";
import {playfulPortfolio} from "@/constants/text";
import CardSkeleton from "@/components/client/loading/CardSkeleton";

const Skills = () => {
    const pathName = usePathname();
    const {isLoading, isError, data, error} = useSkills();

    const skillsItems = useMemo(() => {
        return data?.map((skill, i) => <SkillItem key={skill._id} skill={skill} index={i}/>);
    }, [data]);

    const SkillsItemsLoading = () => {
        return Array(20).fill(0).map((_, i) => <CardSkeleton key={i} className="w-24 h-24"/>);
    };

    if (isError && error) {
        throw new DataFetchingError();
    }

    return (
        <SlideFadeTransition path={pathName}>
            <main className="container mt-24 mb-40">
                <motion.h1
                    variants={animations.headingVariants}
                    initial="hidden"
                    animate="visible"
                    className="text-center lg:text-left mb-5 lg:max-w-xl"
                >
                    My
                    <span className=" text-accent2">
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
                    className="mx-auto text-center max-w-xl body1 lg:text-left lg:max-w-2xl lg:ml-0"
                >
                    {playfulPortfolio.skills}
                </motion.p>

                <section
                    className="bg-blue-5000 p-3 mt-16 mb-32 mx-auto md:max-w-3xl grid gap-10 grid-cols-2 md:grid-cols-3 lg:max-w-3xl lg:ml-0 lg:gap-y-20 lg:grid-cols-6"
                >
                    {isLoading ? <SkillsItemsLoading/> : skillsItems}
                </section>
            </main>
        </SlideFadeTransition>
    );
};

export default Skills;
