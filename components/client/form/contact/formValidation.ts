import {formErrorMessages} from "@/constants";

// Define validation rules for each form field
export const validationRules = {
    sender: {
        required: formErrorMessages.name,
    },
    email: {
        required: formErrorMessages.email,
        pattern: {
            value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/i,
            message: formErrorMessages.email,
        },
    },
    subject: {
        required: formErrorMessages.subject,
    },
    message: {
        required: formErrorMessages.message,
    },
};