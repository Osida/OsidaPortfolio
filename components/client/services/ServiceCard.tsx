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
            transition={{duration: 0.35, ease: "easeInOut"}}
            className="card mx-auto max-w-md shadow-2xl rounded-2xl break-inside-avoid-auto lg:mx-0 relative"
        >
            <figure className="relative rounded-2xl">
                <Image
                    src={urlForImage(service.image.asset)?.url()}
                    alt="service1"
                    width={500}
                    height={500}
                    className="w-full h-full object-contain rounded-2xl"
                />
                <div
                    className="absolute top-0 left-0 w-full h-full rounded-2xl bg-gray-800/70 space-y-10 px-8 py-14"/>
                <div
                    className="absolute top-0 left-0 w-full rounded-2xl h-full space-y-10 px-8 py-14 text-white">
                    <h4 className="subtitle1">{service.serviceName}</h4>
                    <p className="body2">{service.serviceDescription}</p>
                </div>
            </figure>
        </motion.div>
    );
};

export default ServiceCard;
