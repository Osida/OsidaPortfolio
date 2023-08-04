const baseUrl = "/api";

export const apiEndpoints = {
    projects: `${baseUrl}/projects`,
    project: (id: string) => `${baseUrl}/projects/${id}`,
    skills: `${baseUrl}/skills`,
    services: `${baseUrl}/services`,
    contact: `${baseUrl}/email`,
};