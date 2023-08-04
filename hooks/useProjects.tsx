import axios from "axios";
import {ProjectSchema} from "@/types";
import {apiEndpoints} from "@/constants";
import {useQuery} from "@tanstack/react-query";

const useProjects = () => {
    const fetchSkills = async () => {
        const {data, status} = await axios.get<ProjectSchema[]>(apiEndpoints.projects);
        if (status !== 200) throw new Error("Error fetching projects");
        return data;
    };

    return useQuery<ProjectSchema[]>({
        queryKey: ["projects"],
        queryFn: fetchSkills,
    });
};

export default useProjects;