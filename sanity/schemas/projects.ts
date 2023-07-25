export default {
    name: "projects",
    title: "Projects",
    type: "document",
    fields: [
        {
            name: "image",
            title: "Image",
            type: "image",
        },
        {
            name: "repositoryLink",
            title: "Repository Link",
            type: "url",
        },
        {
            name: "deployedLink",
            title: "Deployed Link",
            type: "url",
        },
        {
            name: "projectName",
            title: "Project Name",
            type: "string",
        },
        {
            name: "projectDescription",
            title: "Project Description",
            type: "text",
        },
        {
            name: "hashtags",
            title: "Hashtags",
            type: "array",
            of: [{type: "string"}],
            options: {
                layout: "tags",
            },
        },
        {
            name: "skills",
            title: "Skills",
            type: "array",
            of: [{type: "reference", to: {type: "skills"}}],
        },
    ],
};
