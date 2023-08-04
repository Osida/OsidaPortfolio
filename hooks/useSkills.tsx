import axios from "axios";
import {SkillSchema} from "@/types";
import {apiEndpoints} from "@/constants";
import {useQuery} from "@tanstack/react-query";

const useSkills = () => {
    const fetchSkills = async () => {
        const {data, status} = await axios.get<SkillSchema[]>(apiEndpoints.skills);
        if (status !== 200) throw new Error("Error fetching skills");
        return data;
    };

    return useQuery<SkillSchema[]>({
        queryKey: ["skills"],
        queryFn: fetchSkills,
    });
};

export default useSkills;