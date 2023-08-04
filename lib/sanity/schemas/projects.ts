export default {
    name: "projects",
    title: "Projects",
    type: "document",
    fields: [
        {
            name: "projectName",
            title: "Project Name",
            type: "string",
        },
        {
            name: "projectType",
            title: "Project Type",
            type: "string",
        },
        {
            name: "status",
            title: "Status",
            type: "string",
        },
        {
            name: "illustration",
            title: "Illustration",
            type: "image",
        },
        {
            name: "featureImage",
            title: "Feature Image",
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
