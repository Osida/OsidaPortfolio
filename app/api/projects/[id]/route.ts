import {NextApiRequest} from "next";
import {sanityClient} from "@/sanity/lib/sanityClient";
import {sanityQueries} from "@/sanity/quries";

export const GET = async (req: NextApiRequest, {params}: { params: { id: string } }) => {
    try {
        const {id} = params;

        const project = await sanityClient.fetch(sanityQueries.getProject(id));

        if (!project) return new Response(JSON.stringify("Failed to fetch all project"), {status: 500});

        return new Response(JSON.stringify(project), {status: 200});
    } catch (error) {
        return new Response(JSON.stringify(`Failed to fetch all projects: \n${error}`), {status: 500});
    }
};