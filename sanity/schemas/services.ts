export default {
    name: "services",
    title: "Services",
    type: "document",
    fields: [
        {
            name: "image",
            title: "Image",
            type: "image",
        },
        {
            name: "imageAlt",
            title: "Image Alt",
            type: "string",
            description: "Alt text for the image, for accessibility.",
        },
        {
            name: "serviceName",
            title: "Service Name",
            type: "string",
        },
        {
            name: "serviceDescription",
            title: "Service Description",
            type: "text",
        },
        {
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: "serviceName",
                maxLength: 100,
                slugify: (input: string) => input.toLowerCase().replace(/\s+/g, "-").slice(0, 100),
            },
        },
    ],
};