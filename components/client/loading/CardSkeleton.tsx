"use client";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import {ThemeContext} from "@/components/client/theme/ThemeProvider";
import {useContext} from "react";

interface CardSkeletonProps {
    className?: string;
}

const CardSkeleton = ({className}: CardSkeletonProps) => {
    const {theme} = useContext(ThemeContext);

    return (
        <div className={`max-w-md h-[524px] shadow-2xl rounded-2xl ${className}`}>
            <Skeleton
                // width={500}
                // height={500}
                baseColor={theme === "dark" ? "#2f2f2f" : "#eaeaea"}
                highlightColor={theme === "dark" ? "#1b1b1b" : "#f8f8f8"}
                className="w-full h-full object-contain rounded-2xl"
            />
        </div>
    );
};

export default CardSkeleton;
