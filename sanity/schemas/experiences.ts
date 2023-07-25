export default {
    name: "experiences",
    title: "Experiences",
    type: "document",
    fields: [
        {
            name: "image",
            title: "Image",
            type: "image",
        },
        {
            name: "title",
            title: "Title",
            type: "string",
        },
        {
            name: "subtitle",
            title: "Subtitle",
            type: "string",
        },
        {
            name: "description",
            title: "Description",
            type: "text",
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
