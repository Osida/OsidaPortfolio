import Link from "next/link";
import {motion} from "framer-motion";
import {FaArrowRightLong} from "react-icons/fa6";

const arrowVariants = {
    left: {x: -10},
    right: {x: 10},
    bounce: {
        y: [0, -10, 0],
        transition: {duration: 0.8, repeat: Infinity, ease: "easeInOut"},
    },
};

const AnimatedArrow = () => {
    return (
        <motion.div
            variants={arrowVariants}
            initial="left"
            animate="right"
            whileHover="bounce"
            transition={{repeat: Infinity, repeatType: "reverse", duration: 4,}}
            whileTap={{scale: 0.9, transition: {duration: 0.3, ease: "easeInOut"}}}
            className="flex w-fit h-fit flex-col space-y-2 items-center mb-6"
            data-cy="animated-arrow-container"
        >
            <p className="text-body2" data-cy="arrow-text">My Projects</p>
            <Link href={"/projects"} data-cy="arrow-link">
                <FaArrowRightLong className=" w-16 h-16 text-accent2 lg:w-20 lg:h-20" data-cy="arrow-icon"/>
            </Link>
        </motion.div>
    );
};

export default AnimatedArrow;