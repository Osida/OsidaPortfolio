import Link from "next/link";
import {motion} from "framer-motion";
import {FaArrowRightLong} from "react-icons/fa6";

const arrowVariants = {
    left: { x: -10 },
    right: { x: 10 },
    bounce: {
        y: [0, -10, 0],
        transition: { duration: 0.8, repeat: Infinity, ease: "easeInOut" },
    },
};

const AnimatedArrow = () => {
    return (
        <motion.div
            variants={arrowVariants}
            initial="left"
            animate="right"
            whileHover="bounce"
            transition={{repeat: Infinity, repeatType: "reverse", duration: 2,}}
            whileTap={{ scale: 0.9, transition: { duration: 0.3, ease: "easeInOut" } }}
            className="bg-blue-2000 flex w-fit h-fit flex-col space-y-2 items-center mb-6"
        >
            <p className="font-roboto font-overline uppercase">My Projects</p>
            <Link href={"/projects"}>
                <FaArrowRightLong className="text-secondary w-16 h-16 lg:w-20 lg:h-20" />
            </Link>
        </motion.div>
    );
};

export default AnimatedArrow;