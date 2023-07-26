"use client";
import React, {FormEvent} from "react";
import {handleContactFormSubmit} from "@/utils/server";
import Button from "@/components/client/form/Button";
import PageTransition from "@/components/client/layoutTransition/PageTransition";
import {motion} from "framer-motion";
import {animations} from "@/utils/client";
import {Typewriter} from "react-simple-typewriter";

const Contact = () => {

    const handleFormReset = (event: FormEvent) => {
        event.preventDefault();
        const formElement = document.getElementById("contact-form") as HTMLFormElement;
        formElement?.reset();
    };

    return (
        <PageTransition path={"/contact"}>
            <main className="container">
                <motion.h1
                    variants={animations.headingVariants}
                    initial="hidden"
                    animate="visible"
                    className="text-3xl font-bold text-center lg:text-left mt-20 mb-5 lg:max-w-xl"
                >
                    Let's
                    <span className="text-accent">
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
                {/*<Image src={images.imessage.src} alt={"imessage"} width={150} height={150}/>*/}

                <form
                    action={handleContactFormSubmit}
                    className="bg-amber-2000 form-control w-full max-w-xs mx-auto space-y-2 mb-20 md:max-w-xl lg:ml-0"
                >
                    <div className="flex flex-col md:flex-row md:space-x-4">
                        <div>
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="sender" placeholder="Entrer your name."
                                   className="input input-bordered w-full input-ghost"/>
                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="Enter your email."
                                   className="input input-bordered w-full input-ghost"/>
                        </div>
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text">Subject</span>
                        </label>
                        <input type="text" name="subject" placeholder="Enter the subject."
                               className="input input-bordered w-full input-ghost"/>
                    </div>
                    <div className="bg-red-2000">
                        <label className="label">
                            <span className="label-text">Message</span>
                        </label>
                        <textarea name="message" className="textarea textarea-bordered h-40 w-full textarea-ghost"
                                  placeholder="Enter your message."/>
                    </div>
                    <div className="w-full pt-5 bg-red-2000">
                        <Button/>
                    </div>
                </form>
            </main>
        </PageTransition>
    );
};

export default Contact;
