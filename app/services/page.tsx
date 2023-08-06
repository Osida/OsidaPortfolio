"use client";
import React, {useMemo} from "react";
import {motion} from "framer-motion";
import {Typewriter} from "react-simple-typewriter";
import {usePathname} from "next/navigation";
import {animations, SlideFadeTransition} from "@/lib";
import {DataFetchingError} from "@/utils/exceptions";
import {useServices} from "@/hooks";
import {ServiceCard} from "@/components/client";
import {playfulPortfolio} from "@/constants/text";
import CardSkeleton from "@/components/client/loading/CardSkeleton";


const Services = () => {
    const pathName = usePathname();
    const {isLoading, isError, data, error} = useServices();

    const servicesItems = useMemo(() => {
        return data?.map((service, _) => <ServiceCard key={service.serviceName} service={service}/>);
    }, [data]);

    const ServicesItemsLoading = () => {
        return Array(3).fill(0).map((_, i) => <CardSkeleton key={i}/>);
    };

    if (isError && error) {
        throw new DataFetchingError();
    }

    return (
        <SlideFadeTransition path={pathName}>
            <main className="container bg-red-2000 mt-24 mb-40">
                <motion.h1
                    variants={animations.headingVariants}
                    initial="hidden"
                    animate="visible"
                    className="text-center lg:text-left mb-5 lg:max-w-xl"
                >
                    Things
                    <span className="text-accent2">
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
                    className="mx-auto text-center max-w-xl body1 lg:text-left lg:max-w-2xl lg:ml-0"
                >
                    {playfulPortfolio.services}
                </motion.p>

                <section
                    className="bg-pink-2000 p-3 mt-16 mb-32 mx-auto space-y-10 md:max-w-3xl md:grid md:space-y-0 md:gap-10 md:grid-cols-2 lg:mx-0 lg:max-w-6xl lg:grid-cols-3">
                    {isLoading ? <ServicesItemsLoading/> : servicesItems}
                </section>
            </main>
        </SlideFadeTransition>
    );
};


export default Services;
