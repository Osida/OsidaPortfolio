export default {
    name: "education",
    title: "Education",
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
            name: "school",
            title: "School",
            type: "string",
        },
        {
            name: "degree",
            title: "Degree",
            type: "string",
        },
        {
            name: "dateStarted",
            title: "Date Started",
            type: "datetime",
        },
        {
            name: "dateEnded",
            title: "Date Ended",
            type: "datetime",
        },
    ],
};
