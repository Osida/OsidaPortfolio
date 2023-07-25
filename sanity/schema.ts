import {type SchemaTypeDefinition} from "sanity";
import {
    author,
    blockContent,
    category,
    contacts,
    education,
    experiences,
    post,
    projects,
    services,
    skills,
    skillUsage,
    testimonials,
} from "@/sanity/schemas";


export const schema: { types: SchemaTypeDefinition[] } = {
    types: [
        // post,
        // author,
        // category,
        blockContent,
        services,
        projects,
        skills,
        experiences,
        testimonials,
        contacts,
        education,
        skillUsage,
    ],
};
