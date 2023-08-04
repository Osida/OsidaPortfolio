import {sanityClient} from "@/lib/sanity/sanityClient";
import {sanityQueries} from "@/lib/sanity/quries";

export const GET = async () => {
    try {
        const services = await sanityClient.fetch(sanityQueries.allServices);

        if (!services) return new Response(JSON.stringify("Failed to fetch all services"), {status: 500});

        return new Response(JSON.stringify(services), {status: 200});
    } catch (error) {
        return new Response(JSON.stringify(`Failed to fetch all services: \n${error}`), {status: 500});
    }
};