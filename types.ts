import {ReactNode} from "react";

export type ThemeType = "light" | "dark";

export type ThemeContextType = {
    theme: ThemeType;
    setTheme: (theme: ThemeType) => void;
};

export type ThemeProviderType = {
    children: ReactNode | ReactNode[];
};

interface ImageSchema {
    _type: string;
    asset: {
        _ref: string;
        _type: string;
    };
}

interface SlugSchema {
    current: string;
    _type: string;
}

export interface SkillSchema {
    _createdAt: string;
    _rev: string;
    _type: string;
    _id: string;
    _updatedAt: string;
    skillName: string;
    image: ImageSchema;
}

export interface ServiceSchema {
    _rev: string;
    _type: string;
    serviceDescription: string;
    _id: string;
    serviceName: string;
    imageAlt: string;
    slug: SlugSchema;
    image: ImageSchema;
    _createdAt: string;
    _updatedAt: string;
}

export interface ProjectSchema {
    _createdAt: string;
    _id: string;
    status: string;
    skills: SkillSchema[];
    illustration: ImageSchema;
    featureImage: ImageSchema;
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

