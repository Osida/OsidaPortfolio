"use client";
import React, {useMemo} from "react";
import {motion} from "framer-motion";
import {Typewriter} from "react-simple-typewriter";
import {usePathname} from "next/navigation";
import {animations, SlideFadeTransition} from "@/lib";
import {DataFetchingError} from "@/utils/exceptions";
import useProjects from "@/hooks/useProjects";
import {ProjectCard} from "@/components/client";

const Projects = () => {
    const pathName = usePathname();
    const {isLoading, isError, data, error} = useProjects();

    const projectItems = useMemo(() => {
        return data?.map((project, _) => <ProjectCard key={project._id} project={project}/>);
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
                    className="text-center lg:text-left mb-5 lg:max-w-xl"
                >
                    My
                    <span className="text-accent2">
                        <Typewriter
                            words={["", " Projects"]}
                            cursor
                            cursorStyle="_"
                            typeSpeed={150}
                            deleteSpeed={100}
                            delaySpeed={1000}
                        />
                    </span>
                </motion.h1>

                <section className="relative bg-violet-5000 mt-16 mb-32 columns-1 md:columns-2 lg:columns-3 space-y-7">
                    {projectItems}
                </section>
            </main>
        </SlideFadeTransition>
    );
};

export default Projects;
