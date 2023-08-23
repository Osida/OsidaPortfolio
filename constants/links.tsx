import {AiFillHome, AiFillStar, AiFillTool,} from "react-icons/ai";
import {BsBriefcaseFill} from "react-icons/bs";
import {MdEmail} from "react-icons/md";
import {FaGithub, FaLinkedin} from "react-icons/fa";
import React, {ReactNode} from "react";

export interface NavLinkSchema {
    path: string;
    name: string;
    Icon: (props: any) => React.JSX.Element;
}

export interface SocialLinkSchema extends NavLinkSchema {
}

export const navLinks: NavLinkSchema[] = [
    {
        path: "/",
        name: "home",
        Icon: (props: any) => <AiFillHome {...props}/>,
    },
    {
        path: "/services",
        name: "services",
        Icon: (props: any) => <AiFillTool {...props}/>
    },
    {
        path: "/projects",
        name: "projects",
        Icon: (props: any) => <BsBriefcaseFill {...props}/>,
    },
    {
        path: "/skills",
        name: "skills",
        Icon: (props: any) => <AiFillStar {...props}/>,
    },
    {
        path: "/contact",
        name: "contact",
        Icon: (props: any) => <MdEmail {...props}/>,
    },
];

export const socialLinks: SocialLinkSchema[] = [
    {
        path: "https://github.com/Osida",
        name: "GitHub",
        Icon: (props: any) => <FaGithub {...props}/>,
    },
    {
        path: "https://www.linkedin.com/in/osida-richards",
        name: "LinkedIn",
        Icon: (props: any) => <FaLinkedin {...props}/>,
    },
    // {
    //     path: "https://www.instagram.com",
    //     name: "Instagram",
    //     Icon: <BsInstagram className={"banner-icon"}/>,
    // },
    // {
    //     path: "https://www.twitter.com",
    //     name: "Twitter",
    //     Icon: <FaSquareTwitter className={"banner-icon"}/>,
    // },
];