import {AiFillHome, AiOutlineForm} from "react-icons/ai";
import {BiSolidNetworkChart} from "react-icons/bi";
import {BsInstagram, BsPersonFillGear} from "react-icons/bs";
import {MdOutlineSettingsSuggest} from "react-icons/md";
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {FaSquareTwitter} from "react-icons/fa6";
import React from "react";

export const navLinks = [
    {
        path: "/",
        name: "home",
        Icon: <AiFillHome className={"nav-icon"}/>,
    },
    {
        path: "/services",
        name: "services",
        Icon: <BsPersonFillGear className={"nav-icon"}/>,
    },
    {
        path: "/projects",
        name: "projects",
        Icon: <BiSolidNetworkChart className={"nav-icon"}/>,
    },
    {
        path: "/skills",
        name: "skills",
        Icon: <MdOutlineSettingsSuggest className={"nav-icon"}/>,
    },
    {
        path: "/contact",
        name: "contact",
        Icon: <AiOutlineForm className={"nav-icon"}/>,
    },
];

export const socialLinks = [
    {
        path: "https://github.com/Osida",
        name: "GitHub",
        Icon: <FaGithub className={"banner-icon"}/>,
    },
    {
        path: "https://www.linkedin.com/in/osida-richards",
        name: "LinkedIn",
        Icon: <FaLinkedin className={"banner-icon"}/>,
    },
    {
        path: "https://www.instagram.com", // replace with your Instagram URL
        name: "Instagram",
        Icon: <BsInstagram className={"banner-icon"}/>,
    },
    {
        path: "https://www.twitter.com", // replace with your Twitter URL
        name: "Twitter",
        Icon: <FaSquareTwitter className={"banner-icon"}/>,
    },
];
