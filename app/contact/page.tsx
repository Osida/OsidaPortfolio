"use client";
import React, {useContext, useEffect, useState} from "react";
import {images} from "@/public";
import {animations, SlideFadeTransition} from "@/lib";
import Image from "next/image";
import {motion} from "framer-motion";
import {Typewriter} from "react-simple-typewriter";
import {usePathname} from "next/navigation";
import {ContactForm} from "@/components/client";
import useContactFormMutation from "@/hooks/useContactFormMutation";
import {ToastContainer} from "react-toastify";
import {ThemeContext} from "@/components/client/theme/ThemeProvider";

// Define the generic form data interface
export interface FormData {
    [key: string]: string;
}

export interface ContactFormData {
    email: string;
    message: string;
    sender: string;
    subject: string;
}

export type FormDataType = ContactFormData | FormData;

const Contact = () => {
    const pathName = usePathname();
    const {theme} = useContext(ThemeContext);
    const [animation, setAnimation] = useState("hidden");

    useEffect(() => {
        setAnimation("visible");
        const timer = setTimeout(() => setAnimation("hover"), 2000);
        return () => clearTimeout(timer);
    }, []);

    const {handleSubmitForm, contactFormMutation} = useContactFormMutation();

    return (
        <SlideFadeTransition path={pathName}>
            <main className="container mt-24 mb-40 relative">
                <motion.h1
                    variants={animations.headingVariants}
                    initial="hidden"
                    animate="visible"
                    className="font-roboto text-h1 font-h1 text-center lg:text-left mb-5 lg:max-w-xl"
                >
                    {"Let's"}
                    <span className="text-primary">
                        <Typewriter
                            words={["", " Connect"]}
                            cursor
                            cursorStyle="_"
                            typeSpeed={150}
                            deleteSpeed={100}
                            delaySpeed={1000}
                        />
                    </span>
                </motion.h1>

                <ContactForm onSubmit={handleSubmitForm} isLoading={contactFormMutation.isLoading}/>

                <motion.div
                    variants={animations.imageVariants}
                    initial="hidden"
                    animate={animation}
                    className="hidden bg-sky-2000 z-0 relative bg-emerald-2000 lg:inline lg:absolute lg:bottom-0 lg:right-5 xl:top-0 xl:right-0"
                >
                    <Image
                        src={images.manWithDog.src}
                        alt={"Panda Image"}
                        width={450}
                        height={450}
                        className={"object-contain mx-auto xl:w-[650px] xl:h-[650px]"}
                    />
                </motion.div>
            </main>
            <ToastContainer theme={theme} newestOnTop={true} />
        </SlideFadeTransition>
    );
};

export default Contact;



