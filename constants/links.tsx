import {AiFillHome, AiFillStar, AiFillTool,} from "react-icons/ai";
import {BsBriefcaseFill} from "react-icons/bs";
import {MdEmail} from "react-icons/md";
import {FaGithub, FaLinkedin} from "react-icons/fa";
import React, {ReactNode} from "react";

export interface NavLinkSchema {
    path: string;
    name: string;
    Icon: ReactNode;
}

export interface SocialLinkSchema extends NavLinkSchema {
}

export const navLinks: NavLinkSchema[] = [
    {
        path: "/",
        name: "home",
        Icon: <AiFillHome className="nav-icon"/>,
    },
    {
        path: "/services",
        name: "services",
        Icon: <AiFillTool className="nav-icon"/>
    },
    {
        path: "/projects",
        name: "projects",
        Icon: <BsBriefcaseFill className="nav-icon"/>,
    },
    {
        path: "/skills",
        name: "skills",
        Icon: <AiFillStar className="nav-icon"/>,
    },
    {
        path: "/contact",
        name: "contact",
        Icon: <MdEmail className="nav-icon"/>,
    },
];

export const socialLinks: SocialLinkSchema[] = [
    {
        path: "https://github.com/Osida",
        name: "GitHub",
        Icon: <FaGithub className="nav-icon"/>,
    },
    {
        path: "https://www.linkedin.com/in/osida-richards",
        name: "LinkedIn",
        Icon: <FaLinkedin className="nav-icon"/>,
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