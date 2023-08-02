"use client";
import React from "react";
import PageTransition from "@/components/client/layoutTransition/PageTransition";
import {usePathname} from "next/navigation";
import {endpoints} from "@/constants";
import axios from "axios";
import {useQuery} from "@tanstack/react-query";
import Image from "next/image";
import {urlForImage} from "@/sanity/lib/image";

interface RouteParams {
    params: {
        id: string;
    };
}

const ProjectName = ({params}: { params: { id: string } }) => {
    const pathName = usePathname();
    const {id: _id} = params;

    const fetchProject = async (id: string) => {
        if (!id) throw new Error("Error fetching project. No id provided.");
        const {data, status} = await axios.get<ProjectData>(endpoints.project(id));
        if (status !== 200) throw new Error("Error fetching project");
        return data;
    };

    const {isLoading, isError, data, error} = useQuery<ProjectData>({
        queryKey: ["project", _id],
        queryFn: () => fetchProject(_id),
    });

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError && error) {
        // @ts-ignore
        return <div>Error: {error?.message}</div>;
    }

    if (!data) {
        return <div>No data {typeof data}</div>;
    }

    return (
        <PageTransition path={pathName}>
            <main className="container mt-10 mb-40">
                <div>
                    <Image
                        src={urlForImage(data.illustration.asset)?.url()}
                        alt={"Image"}
                        width={200}
                        height={200}
                        className="mx-auto object-contain rounded-xl"
                    />
                </div>

                <h2 className="mt-10 font-bold text-2xl text-primary">
                    {data.projectName}
                </h2>

                <hr className="w-full h-0.5 bg-gray-500 mb-8 mt-4"/>

                <div className="flex flex-col space-y-5 md:flex-row md:space-y-0 md:space-x-8">
                    <div className="bg-red-500 flex justify-between md:flex-[20%]">
                        <p className="font-medium text-lg text-secondary">Category</p>
                        <p>{data.projectType}</p>
                    </div>

                    <div className="bg-blue-500 flex justify-between mt-6md:flex-[30%]">
                        <p className="font-medium text-lg text-secondary">Tech Stack</p>
                        <div className="">
                            {
                                data.hashtags.map((tech, index) => (
                                    <p key={index}>{tech}</p>
                                ))
                            }
                        </div>
                    </div>

                    <p className="bg-green-500 mt-6 md:flex-[50%]">
                        {data.projectDescription}
                    </p>
                </div>

                <h3 className="mt-8"></h3>
                <div className="columns-1 space-y-4 my-10 lg:columns-2">
                    {
                        data.images.map((image, index) => (
                            <Image
                                key={index}
                                src={urlForImage(image.asset)?.url()}
                                alt={"Image"}
                                width={200}
                                height={200}
                                className="mx-auto object-contain rounded-xl md:w-[500px] md:h-[500px]"
                            />
                        ))
                    }
                </div>

                <hr className="w-full h-0.5 bg-gray-500 mb-4"/>
            </main>
        </PageTransition>
    );
};

export default ProjectName;
