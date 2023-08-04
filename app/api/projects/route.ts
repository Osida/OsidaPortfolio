import {sanityClient} from "@/lib/sanity/sanityClient";
import {sanityQueries} from "@/lib/sanity/quries";

export const GET = async () => {
    try {
        const projects = await sanityClient.fetch(sanityQueries.allProjects);

        if (!projects) return new Response(JSON.stringify("Failed to fetch all projects"), {status: 500});

        return new Response(JSON.stringify(projects), {status: 200});
    } catch (error) {
        return new Response(JSON.stringify(`Failed to fetch all projects: \n${error}`), {status: 500});
    }
};