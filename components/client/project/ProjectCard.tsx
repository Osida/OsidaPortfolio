import {ProjectSchema} from "@/types";
import Image from "next/image";
import {urlForImage} from "@/lib/sanity";
import placeholder from "@/public/images/placeholder-project.png";
import React from "react";
import {motion} from "framer-motion";
import {animations} from "@/lib";

const ProjectCard = ({project}: { project: ProjectSchema }) => {
    return (
        <motion.div
            variants={animations.cardVariants}
            whileHover="hover"
            initial="initial"
            transition={{duration: 0.35, ease: "easeInOut"}}
            className="mx-auto card card-compact max-w-sm h-fit shadow-xl break-inside-avoid-column"
        >
            <figure className="relative">
                <Image
                    src={urlForImage(project.featureImage.asset)?.url() || placeholder}
                    alt={"Image"}
                    width={400}
                    height={300}
                    className="mx-auto object-contain md:w-full md:h-full"
                />
            </figure>
            <div className="card-body space-y-3">
                <h6>{project.projectName}</h6>
                <p className="body2">{project.projectDescription}</p>
                <div className="card-actions justify-end">
                    <a href={project.repositoryLink} target="_blank" rel="noopener noreferrer"
                       className="btn btn-sm bg-secondary text-fontColor shadow-sm">
                        Code
                    </a>
                    <a href={project.deployedLink} target="_blank" rel="noopener noreferrer"
                       className="btn btn-sm bg-accent1 text-fontColor shadow-smm">
                        Live
                    </a>
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;