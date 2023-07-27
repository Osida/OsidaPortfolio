"use client";
import React from "react";
import {useRouter} from "next/navigation";

const Button = () => {
    const router = useRouter();
    return (
        <button type="submit" onClick={() => router.push("/")} className="w-full btn btn-accent text-base-100">
            Submit
        </button>
    );
};

export default Button;
