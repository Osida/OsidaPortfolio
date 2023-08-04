export default {
    name: "skills",
    title: "Skills",
    type: "document",
    fields: [
        {
            name: "image",
            title: "Image",
            type: "image",
            options: {
                hotspot: true
            },
        },
        {
            name: "skillName",
            title: "Skill Name",
            type: "string",
        },
    ],
};
