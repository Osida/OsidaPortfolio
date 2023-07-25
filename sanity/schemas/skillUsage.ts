export default {
    name: "skillUsage",
    title: "Skill Usage",
    type: "document",
    fields: [
        {
            name: "skill",
            title: "Skill",
            type: "reference",
            to: {type: "skills"},
        },
        {
            name: "project",
            title: "Project",
            type: "reference",
            to: {type: "projects"},
        },
    ],
};
