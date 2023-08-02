"use client";
import React from "react";
import {motion} from "framer-motion";
import PageTransition from "@/components/client/layoutTransition/PageTransition";
import {animations} from "@/utils/client";
import {Typewriter} from "react-simple-typewriter";
import Image from "next/image";
import axios from "axios";
import {useQuery} from "@tanstack/react-query";
import {urlForImage} from "@/sanity/lib/image";
import {usePathname} from "next/navigation";
import {endpoints} from "@/constants";


const Services = () => {
    const pathName = usePathname();

    const fetchServices = async () => {
        const {data, status} = await axios.get<ServiceData[]>(endpoints.services);
        if (status !== 200) throw new Error("Error fetching services");
        return data;
    };

    const {isLoading, isError, data, error} = useQuery<ServiceData[]>({
        queryKey: ["services"],
        queryFn: fetchServices,
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
            <main className="container bg-red-2000 mt-24 mb-40">
                <motion.h1
                    variants={animations.headingVariants}
                    initial="hidden"
                    animate="visible"
                    className="font-roboto text-h1 font-h1 text-center lg:text-left mb-5 lg:max-w-xl"
                >
                    Things
                    <span className="text-primary">
                        <Typewriter
                            words={["", " I do"]}
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

                {/* card container*/}
                <section
                    className="bg-pink-2000 p-3 mt-16 mb-32 mx-auto space-y-10 md:max-w-3xl md:grid md:space-y-0 md:gap-10 md:grid-cols-2 lg:mx-0 lg:max-w-6xl lg:grid-cols-3">
                    {
                        data && data.map((service, i) => (
                            // card component
                            <motion.div
                                key={i}
                                variants={animations.cardVariants}
                                whileHover="hover"
                                initial="initial"
                                className="card mx-auto max-w-md bg-base-100 shadow-xl break-inside-avoid-auto lg:mx-0 relative"
                            >
                                <figure className="relative rounded-xl">
                                    <Image src={urlForImage(service.image.asset)?.url()} alt="service1" width={500}
                                           height={500}
                                           className="w-full h-full object-contain rounded-xl"/>
                                    <div
                                        className="absolute top-0 left-0 w-full h-full bg-gray-800 opacity-80 hover:opacity-0 transition-opacity duration-500 space-y-10 px-8 py-14"/>
                                    <div
                                        className="absolute top-0 left-0 w-full h-full space-y-10 px-8 py-14 text-white transition-opacity duration-500 hover:opacity-100">
                                        <h2 className="font-roboto text-h3 font-h3">
                                            {service.serviceName}
                                        </h2>
                                        <p className="font-open-sans text-body2 font-body2 ">
                                            {service.serviceDescription}
                                        </p>
                                    </div>
                                </figure>
                            </motion.div>
                        ))}
                </section>
            </main>
        </PageTransition>
    );
};

export default Services;
