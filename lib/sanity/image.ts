import type {Image} from "sanity";
import {dataset, projectId} from "@/lib/sanity/env";
import createImageUrlBuilder from "@sanity/image-url";

const imageBuilder = createImageUrlBuilder({
    projectId: projectId || "",
    dataset: dataset || "",
});

export const urlForImage = (source: Image) => {
    return imageBuilder?.image(source).auto("format").fit("max");
};
