export default {
    name: "contacts",
    title: "Contacts",
    type: "document",
    fields: [
        {
            name: "name",
            title: "Name",
            type: "string",
        },
        {
            name: "email",
            title: "Email",
            type: "email",
        },
        {
            name: "message",
            title: "Message",
            type: "text",
        },
    ],
};
