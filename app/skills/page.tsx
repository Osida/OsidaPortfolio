"use client";
import React, {useMemo} from "react";
import {motion} from "framer-motion";
import {Typewriter} from "react-simple-typewriter";
import {usePathname} from "next/navigation";
import {animations, SlideFadeTransition} from "@/lib";
import {useSkills} from "@/hooks";
import {SkillItem} from "@/components/client";
import {DataFetchingError} from "@/utils/exceptions";

const Skills = () => {
    const pathName = usePathname();
    const {isLoading, isError, data, error} = useSkills();

    const skillsItems = useMemo(() => {
        return data?.map((skill, i) => <SkillItem key={skill._id} skill={skill} index={i}/>);
    }, [data]);

    if (isLoading) {
        return <div>Loading...</div>;
    }

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
                    {skillsItems}
                </section>
            </main>
        </SlideFadeTransition>
    );
};

export default Skills;
