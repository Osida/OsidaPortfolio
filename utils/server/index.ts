"use server";
import {redirect} from "next/navigation";

export const handleContactFormSubmit = async (data: FormData) => {
    try {
        const name = data.get("sender") as string;
        const email = data.get("email") as string;
        const subject = data.get("subject") as string;
        const message = data.get("message") as string;

        // Here you would send the form data to your backend
        console.log("form data: ", {name, email, subject, message});
    } catch (error) {
        console.error("Error handling form data: ", error);
        // Here you might want to redirect to an error page or handle the error in another way
    }
};