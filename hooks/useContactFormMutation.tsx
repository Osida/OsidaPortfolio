import {useMutation} from "@tanstack/react-query";
import {FormDataType} from "@/app/contact/page";
import axios from "axios";
import {apiEndpoints} from "@/constants";

const useContactFormMutation = () => {
    const contactFormMutation = useMutation({
        mutationFn: (post: FormDataType) => {
            return axios.post(apiEndpoints.contact, post);
        },
        onSuccess: (data, variables, context) => {
            console.log(`Success: `, data);
        },
        onError: (error, variables, context) => {
            console.log(`Failed: `, error);
        },
    });

    const handleSubmitForm = (data: FormDataType) => {
        contactFormMutation.mutate(data);
    };

    return {
        handleSubmitForm,
        contactFormMutation,
    };
};

export default useContactFormMutation;