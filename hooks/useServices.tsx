import axios from "axios";
import {ServiceSchema} from "@/types";
import {apiEndpoints} from "@/constants";
import {useQuery} from "@tanstack/react-query";

const useServices = () => {
    const fetchServices = async () => {
        const {data, status} = await axios.get<ServiceSchema[]>(apiEndpoints.services);
        if (status !== 200) throw new Error("Error fetching services");
        return data;
    };

    return useQuery<ServiceSchema[]>({
        queryKey: ["services"],
        queryFn: fetchServices,
    });
};

export default useServices;
