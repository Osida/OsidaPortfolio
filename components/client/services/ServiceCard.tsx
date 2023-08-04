import React from "react";
import {ServiceSchema} from "@/types";
import {animations} from "@/lib";
import {urlForImage} from "@/lib/sanity";
import {motion} from "framer-motion";
import Image from "next/image";

const ServiceCard = ({service}: { service: ServiceSchema }) => {
    return (
        <motion.div
            variants={animations.cardVariants}
            whileHover="hover"
            initial="initial"
            className="card mx-auto max-w-md bg-base-100 shadow-xl break-inside-avoid-auto lg:mx-0 relative"
        >
            <figure className="relative rounded-xl">
                <Image
                    src={urlForImage(service.image.asset)?.url()}
                    alt="service1"
                    width={500}
                    height={500}
                    className="w-full h-full object-contain rounded-xl"
                />
                <div
                    className="absolute top-0 left-0 w-full h-full bg-gray-800 opacity-80 hover:opacity-0 transition-opacity duration-500 space-y-10 px-8 py-14"/>
                <div
                    className="absolute top-0 left-0 w-full h-full space-y-10 px-8 py-14 text-white transition-opacity duration-500 hover:opacity-100">
                    <h2 className="font-roboto text-h3 font-h3">{service.serviceName}</h2>
                    <p className="font-open-sans text-body2 font-body2 ">{service.serviceDescription}</p>
                </div>
            </figure>
        </motion.div>
    );
};

export default ServiceCard;
