import {ProjectSchema} from "@/types";
import Image from "next/image";
import {urlForImage} from "@/lib/sanity";
import placeholder from "@/public/images/placeholder-project.png";
import React from "react";

const ProjectCard = ({project}: { project: ProjectSchema }) => {
    return (
        <div className="mx-auto card card-compact max-w-sm h-fit bg-base-100 shadow-xl break-inside-avoid-column">
            <figure className="relative">
                <Image
                    src={urlForImage(project.featureImage.asset)?.url() || placeholder}
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
                    <a href={project.repositoryLink} target="_blank" rel="noopener noreferrer"
                       className="btn btn-primary btn-sm">
                        Code
                    </a>
                    <a href={project.deployedLink} target="_blank" rel="noopener noreferrer"
                       className="btn btn-accent btn-sm">
                        Live
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;