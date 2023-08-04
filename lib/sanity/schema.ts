import {type SchemaTypeDefinition} from "sanity";
import {education, experiences, projects, services, skills, skillUsage, testimonials,} from "@/lib/sanity/index";

export const schema: { types: SchemaTypeDefinition[] } = {
    types: [
        education,
        experiences,
        projects,
        services,
        skills,
        skillUsage,
        testimonials,
    ],
};
