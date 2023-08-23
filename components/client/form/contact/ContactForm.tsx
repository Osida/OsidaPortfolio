"use client";
import React from "react";
import {useForm} from "react-hook-form";
import ErrorText from "@/components/client/form/ErrorText";
import FormInput from "@/components/client/form/FormInput";
import {FormDataType} from "@/app/contact/page";
import {validationRules} from "@/components/client/form/contact/formValidation";
import {toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface ContactFormProps {
    onSubmit: (data: FormDataType) => void;
    isLoading: boolean;
}

const ContactForm = ({onSubmit, isLoading}: ContactFormProps) => {
    const {register, handleSubmit, formState: {errors}, reset} = useForm<FormDataType>();

    const onSubmitHandler = async (data: FormDataType) => {
        try {
            const res = await onSubmit(data);
            console.log(res);
            toast.success("Form submitted successfully!");
            reset();
        } catch (error) {
            toast.error("An error occurred while submitting the form.");
        }
    };


    return (
        <form
            className="form-control w-full max-w-xs mx-auto space-y-2 mb-20 md:max-w-xl lg:ml-0 "
            onSubmit={handleSubmit(onSubmitHandler)}
        >
            {/*{toast.success("Form submitted successfully!")}*/}
            <div className="flex flex-col md:flex-row md:space-x-4">
                <div className="md:flex-1">
                    <label className="label space-x-4"><span className="label-text">Name</span></label>
                    <FormInput
                        type="text"
                        aria-label="sender"
                        placeholder="Enter your name."
                        error={errors.sender}
                        {...register("sender", validationRules.sender)}
                    />
                </div>

                <div className="md:flex-1">
                    <label className="label space-x-4"><span className="label-text">Email</span></label>
                    <FormInput
                        type="email"
                        aria-label="email"
                        placeholder="Enter your email."
                        error={errors.email}
                        {...register("email", validationRules.email)}
                    />
                </div>
            </div>

            <div>
                <label className="label space-x-4"><span className="label-text">Subject</span></label>
                <FormInput
                    type="text"
                    aria-label="subject"
                    placeholder="Enter your subject."
                    error={errors.subject}
                    {...register("subject", validationRules.subject)}
                />
            </div>

            <div>
                <label className="label space-x-4"><span className="label-text">Message</span></label>
                <textarea
                    aria-label="message"
                    placeholder="Enter your message."
                    className="textarea textarea-bordered h-40 w-full textarea-ghost placeholder-gray-400 body2 focus:bg-transparent"
                    {...register("message", validationRules.message)}
                />
                {errors.message && <ErrorText>{errors.message.message}</ErrorText>}
            </div>

            <div className="w-full pt-5">
                <button type="submit" className="w-full btn btn-ghost bg-accent1 text-fontColor hover:bg-accent1/70" disabled={isLoading}>
                    Submit
                </button>
            </div>
        </form>
    );
};

export default ContactForm;
