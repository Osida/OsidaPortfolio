interface Image {
    _type: string;
    asset: {
        _ref: string;
        _type: string;
    };
}

interface Slug {
    current: string;
    _type: string;
}

interface SkillData {
    _createdAt: string;
    _rev: string;
    _type: string;
    _id: string;
    _updatedAt: string;
    skillName: string;
    image: Image;
}

interface ServiceData {
    _rev: string;
    _type: string;
    serviceDescription: string;
    _id: string;
    serviceName: string;
    imageAlt: string;
    slug: Slug;
    image: Image;
    _createdAt: string;
    _updatedAt: string;
}

interface ProjectData {
    _createdAt: string;
    _id: string;
    status: string;
    skills: SkillData[];
    illustration: Image;
    images: Image[];
    _type: string;
    projectDescription: string;
    projectType: string;
    projectName: string;
    repositoryLink: string;
    deployedLink: string;
    _updatedAt: string;
    _rev: string;
    hashtags: string[];
}

