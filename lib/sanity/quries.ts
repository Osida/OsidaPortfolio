export const sanityQueries = {
    allServices: `*[_type == "services"]`,
    allProjects: `*[_type == "projects"]`,
    getProject: (id: string) => `*[_type == "projects" && _id == "${id}"][0]`,
    allSkills: `*[_type == "skills"]`,
    allExperiences: `*[_type == "experiences"]`,
    allTestimonials: `*[_type == "testimonials"]`,
    allContacts: `*[_type == "contacts"]`,
    allEducation: `*[_type == "education"]`,
    allSkillUsage: `*[_type == "skillUsage"]`,
};
