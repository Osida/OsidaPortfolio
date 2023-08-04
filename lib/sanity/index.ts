import {sanityQueries} from "@/lib/sanity/quries";
import {sanityClient} from "@/lib/sanity/sanityClient";
import {urlForImage} from "@/lib/sanity/image";
import {apiVersion, dataset, projectId, useCdn} from "@/lib/sanity/env";
import {education, experiences, projects, services, skills, skillUsage, testimonials} from "@/lib/sanity/schemas";


export {
    sanityQueries,
    sanityClient,
    urlForImage,
    apiVersion,
    dataset,
    projectId,
    useCdn,
    education, experiences, projects, services, skills, skillUsage, testimonials
};