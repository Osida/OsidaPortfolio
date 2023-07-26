"use client";
import {motion} from "framer-motion";
import {FaArrowRightLong} from "react-icons/fa6";
import Link from "next/link";
import PageTransition from "@/components/client/layoutTransition/PageTransition";
import {Typewriter} from "react-simple-typewriter";
import {animations, headerTaglines} from "@/utils/client";

export default function Home() {

    return (
        <PageTransition path={"/home"}>
            <main className="container ">
                <motion.h1
                    variants={animations.headingVariants}
                    initial="hidden"
                    animate="visible"
                    className="text-3xl font-bold text-center lg:text-left mt-20 mb-5 lg:max-w-xl"
                >
                    Transforming Ideas Into <br/>
                    <span className="text-accent">
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
                    className="mx-auto text-center max-w-xl lg:text-left lg:max-w-2xl lg:ml-0"
                >
                    lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et
                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
                </motion.p>

                <div className="bg-amber-2000 flex items-center justify-center lg:justify-start lg:pl-3 mt-16">
                    <AnimatedArrow/>
                </div>
            </main>
        </PageTransition>
    );
}


const AnimatedArrow = () => {
    const arrowVariants = {
        left: {x: -10},
        right: {x: 10},
        bounce: {y: [0, -10, 0], transition: {duration: 0.8, repeat: Infinity}},
    };

    return (
        <motion.div
            className="bg-blue-2000 flex w-fit h-fit flex-col space-y-2 items-center"
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
        >
            <p className="text-sm">My Projects</p>
            <Link href={"/projects"}>
                <FaArrowRightLong className="w-10 h-10"/>
            </Link>
        </motion.div>
    );
};