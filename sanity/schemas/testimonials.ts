export default {
    name: "testimonials",
    title: "Testimonials",
    type: "document",
    fields: [
        {
            name: "image",
            title: "Image",
            type: "image",
        },
        {
            name: "name",
            title: "Name",
            type: "string",
        },
        {
            name: "position",
            title: "Position",
            type: "string",
        },
        {
            name: "testimony",
            title: "Testimony",
            type: "text",
        },
        {
            name: "project",
            title: "Project",
            type: "reference",
            to: {type: "projects"},
        },
    ],
};
