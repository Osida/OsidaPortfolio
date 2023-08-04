"use client";
import {motion} from "framer-motion";
import SlideFadeTransition from "@/lib/framerMotion/SlideFadeTransition";
import {Typewriter} from "react-simple-typewriter";
import {headerTaglines} from "@/constants";
import {animations} from "@/lib";
import Image from "next/image";
import {images} from "@/public";
import {useEffect, useState} from "react";
import {usePathname} from "next/navigation";
import {AnimatedArrow} from "@/components/client";


export default function Home() {
    const pathName = usePathname();
    const [animation, setAnimation] = useState("hidden");

    useEffect(() => {
        setAnimation("visible");
        const timer = setTimeout(() => setAnimation("hover"), 2000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <SlideFadeTransition path={pathName}>
            <main className="container relative bg-red-2000 mt-24 mb-40">
                <motion.h1
                    variants={animations.headingVariants}
                    initial="hidden"
                    animate="visible"
                    className={`font-roboto text-h1 font-h1 mb-5 text-center lg:mb-8 lg:text-6xl lg:text-left lg:max-w-3xl`}
                >
                    Transforming Ideas <br/>
                    <div className="text-primary">
                        <Typewriter words={[...headerTaglines]} loop={5} cursor cursorStyle="_" typeSpeed={150}
                                    deleteSpeed={100} delaySpeed={1000}/>
                    </div>
                </motion.h1>

                <motion.p
                    variants={animations.paragraphVariants}
                    initial="hidden"
                    animate="visible"
                    className={` z-50 font-open-sans text-body1 font-body1 mx-auto text-center max-w-xl lg:text-xl lg:text-left lg:max-w-2xl lg:ml-0`}
                >
                    lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et
                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
                </motion.p>

                <div className="bg-amber-2000 flex items-center justify-center lg:justify-start lg:pl-3 mt-16">
                    <AnimatedArrow/>
                </div>

                <motion.div
                    variants={animations.imageVariants}
                    initial="hidden"
                    animate={animation}
                    className="z-0 relative bg-emerald-2000 lg:absolute lg:top-20 lg:right-10 xl:top-32 xl:right-20"
                >
                    <Image
                        src={images.panda.src}
                        alt={"Panda Image"}
                        width={500}
                        height={500}
                        className={"hidden object-contain mx-auto lg:block xl:w-[650px] xl:h-[650px]"}
                    />
                </motion.div>
            </main>
        </SlideFadeTransition>
    );
}