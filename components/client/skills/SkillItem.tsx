import React from "react";
import {SkillSchema} from "@/types";
import {motion} from "framer-motion";
import Image from "next/image";
import {urlForImage} from "@/lib/sanity";

const staggerVariants = {
    hidden: {opacity: 0},
    visible: {opacity: 1},
};

const SkillItem = ({ skill, index }: { skill: SkillSchema, index: number }) => {
    return (
        <motion.div
            key={skill._id}
            className="relative mx-auto bg-yellow-3000 flex items-center justify-center rounded-full w-20 h-20 md:w-24 md:h-24"
            variants={staggerVariants}
            initial="hidden"
            animate="visible"
            transition={{duration: 0.3, delay: index * 0.3, ease: "easeInOut"}}
            whileHover={{
                scale: 1.2,
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                // transition: {duration: 0.1, ease: "easeInOut"}
            }}
        >
            <p className="absolute -top-5 text-xs font-bold text-center w-full">
                {skill.skillName}
            </p>
            <Image
                src={urlForImage(skill.image.asset)?.url()}
                alt={"react"}
                fill={true}
                // width={90}
                // height={90}
                className={"rounded-full object-contain"}
            />
        </motion.div>
    );
};

export default SkillItem;
