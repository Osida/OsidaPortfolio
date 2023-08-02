"use client";
import React, {useEffect, useState} from "react";
import {motion} from "framer-motion";
import PageTransition from "@/components/client/layoutTransition/PageTransition";
import {animations} from "@/utils/client";
import {Typewriter} from "react-simple-typewriter";
import axios from "axios";
import {useQuery} from "@tanstack/react-query";
import Image from "next/image";
import {usePathname} from "next/navigation";
import {endpoints} from "@/constants";
import placeholder from "@/public/images/placeholder-project.png";

const Projects = () => {
    const pathName = usePathname();
    const [clientData, setClientData] = useState<ProjectData[] | undefined | null>(null);
    const [isHovered, setIsHovered] = useState(false);


    const fetchProjects = async () => {
        const {data, status} = await axios.get<ProjectData[]>(endpoints.projects);
        if (status !== 200) throw new Error("Error fetching projects");
        return data;
    };

    const {isLoading, isError, data, error} = useQuery<ProjectData[]>({
        queryKey: ["projects"],
        queryFn: fetchProjects,
    });

    useEffect(() => {
        if (data) {
            setClientData(data);
        }
    }, [data]);

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
                    {
                        data && data.map((project, index) => (
                            <Project key={project._id} project={project}/>
                        ))
                    }
                </section>
            </main>
        </PageTransition>
    );
};

const Project = ({project}: { project: ProjectData }) => {
    return (
        <div className="mx-auto card card-compact max-w-sm h-fit bg-base-100 shadow-xl break-inside-avoid-column">
            <figure className="relative">
                <Image
                    src={placeholder}
                    alt={"Image"}
                    width={400}
                    height={300}
                    className="mx-auto object-contain md:w-full md:h-full"
                />
            </figure>
            <div className="card-body space-y-5">
                <h2 className="card-title">{project.projectName}</h2>
                <p>{project.projectDescription}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary btn-sm">Code</button>
                    <button className="btn btn-primary btn-sm">Live</button>
                </div>
            </div>
        </div>
    );
};


export default Projects;
