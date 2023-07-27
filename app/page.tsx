"use client";
import {motion} from "framer-motion";
import {FaArrowRightLong} from "react-icons/fa6";
import Link from "next/link";
import PageTransition from "@/components/client/layoutTransition/PageTransition";
import {Typewriter} from "react-simple-typewriter";
import {animations, headerTaglines} from "@/utils/client";
import Image from "next/image";
import {images} from "@/public";
import {useEffect, useState} from "react";


export default function Home() {
    const [animation, setAnimation] = useState("hidden");

    useEffect(() => {
        setAnimation("visible");
        const timer = setTimeout(() => setAnimation("hover"), 2000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <PageTransition path={"/home"}>
            <main className="container relative bg-red-2000 mt-24 mb-40">
                <motion.h1
                    variants={animations.headingVariants}
                    initial="hidden"
                    animate="visible"
                    className={`font-roboto text-h1 font-h1 mb-5 text-center lg:mb-8 lg:text-6xl lg:text-left lg:max-w-3xl`}
                >
                    Transforming Ideas <br/>
                    <span className="text-primary">
                        <Typewriter
                            words={[...headerTaglines]}
                            loop={5}
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
                    className="z-0 relative bg-emerald-2000 lg:absolute lg:top-20 lg:right-20 xl:top-40 xl:right-30"
                >
                    <Image
                        src={images.panda.src}
                        alt={"Panda Image"}
                        width={500}
                        height={500}
                        className={"object-contain mx-auto xl:w-[700px] xl:h-[700px]"}
                    />
                </motion.div>

            </main>
        </PageTransition>
    );
}


const AnimatedArrow = () => {
    const arrowVariants = {
        left: {x: -10},
        right: {x: 10},
        bounce: {y: [0, -10, 0], transition: {duration: 0.8, repeat: Infinity, ease: "easeInOut"}},
    };

    return (
        <motion.div
            variants={arrowVariants}
            initial="left"
            animate="right"
            whileHover="bounce"
            transition={{
                repeat: Infinity,
                repeatType: "reverse",
                duration: 2,
            }}
            whileTap={{scale: 0.9, transition: {duration: 0.3, ease: "easeInOut"}}}
            className="bg-blue-2000 flex w-fit h-fit flex-col space-y-2 items-center mb-6"
        >
            <p className="font-roboto font-overline uppercase">My Projects</p>
            <Link href={"/projects"}>
                <FaArrowRightLong className="text-secondary w-16 h-16 lg:w-20 lg:h-20"/>
            </Link>
        </motion.div>
    );
};