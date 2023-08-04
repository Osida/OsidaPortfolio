import {sanityClient} from "@/lib/sanity/sanityClient";
import {sanityQueries} from "@/lib/sanity/quries";

export const GET = async () => {
    try {
        const skills = await sanityClient.fetch(sanityQueries.allSkills);

        if (!skills) return new Response(JSON.stringify("Failed to fetch all skills"), {status: 500});

        return new Response(JSON.stringify(skills), {status: 200});
    } catch (error) {
        return new Response(JSON.stringify(`Failed to fetch all skills: \n${error}`), {status: 500});
    }
};