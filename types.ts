interface Image {
    _type: string;
    asset: {
        _ref: string;
        _type: string;
    };
}

interface Skill {
    _createdAt: string;
    _rev: string;
    _type: string;
    _id: string;
    _updatedAt: string;
    skillName: string;
    image: Image;
}

export interface SkillsData extends Array<Skill> {
}