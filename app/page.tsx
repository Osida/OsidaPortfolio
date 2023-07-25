"use client";
import {motion} from "framer-motion";
import {FaArrowRightLong} from "react-icons/fa6";
import Link from "next/link";

export default function Home() {
    return (
        <main className="container">
            <h1 className="text-3xl font-bold text-center lg:text-left mt-20 mb-5 lg:max-w-md">
                Transforming Ideas Into <span className="text-red-600">Digital Reality</span>
            </h1>

            <p className="mx-auto text-center max-w-xl lg:text-left lg:max-w-2xl lg:ml-0">
                lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
            </p>

            <div className="bg-amber-2000 flex items-center justify-center lg:justify-start lg:pl-3 mt-16">
                <AnimatedArrow/>
            </div>
        </main>
    );
}


const AnimatedArrow = () => {
    const arrowVariants = {
        left: {x: -10},
        right: {x: 10},
    };

    return (
        <motion.div
            className="bg-blue-2000 flex w-fit h-fit flex-col space-y-2 items-center"
            variants={arrowVariants}
            initial="left"
            animate="right"
            transition={{
                repeat: Infinity,
                repeatType: "reverse",
                duration: 2,
            }}
            whileHover={{scale: 1.3, transition: {duration: 0.3, ease: "easeInOut"}}}
            whileTap={{scale: 0.9, transition: {duration: 0.3, ease: "easeInOut"}}}
        >
            <p className="text-sm">My Projects</p>
            <Link href={"/projects"}>
                <FaArrowRightLong className="w-10 h-10"/>
            </Link>
        </motion.div>
    );
};