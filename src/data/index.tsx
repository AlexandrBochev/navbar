import {
  FaFacebook,
  FaFolderOpen,
  FaHome,
  FaInfoCircle,
  FaInstagram,
  FaLinkedin,
  FaSketch,
  FaTwitter,
} from "react-icons/fa";
import { IoIosContact } from "react-icons/io";
import { RiProfileFill } from "react-icons/ri";
import { AboutPage } from "../pages/about-page";
import { ContactPage } from "../pages/contact-page";
import { HomePage } from "../pages/home-page";
import { ProfilePage } from "../pages/profile-page";
import { ProjectsPage } from "../pages/projects-page";

export const pages = [
  {
    id: "1",
    path: "/",
    title: "home",
    description: "this is the home page",
    component: HomePage,
    icon: <FaHome />,
  },
  {
    id: "2",
    path: "/about",
    title: "about",
    description: "this is the about page",
    component: AboutPage,
    icon: <FaInfoCircle />,
  },
  {
    id: "3",
    path: "/projects",
    title: "projects",
    description: "this is the projects page",
    component: ProjectsPage,
    icon: <FaFolderOpen />,
  },
  {
    id: "4",
    path: "/contact",
    title: "contact",
    description: "this is the contact page",
    component: ContactPage,
    icon: <IoIosContact />,
  },
  {
    id: "5",
    path: "/profile",
    title: "profile",
    description: "this is the profile page",
    component: ProfilePage,
    icon: <RiProfileFill />,
  },
];

export const social = [
  {
    id: "1",
    url: "https://www.facebook.com",
    icon: <FaFacebook />,
  },
  {
    id: "2",
    url: "https://www.twitter.com",
    icon: <FaTwitter />,
  },
  {
    id: "3",
    url: "https://www.linkedin.com",
    icon: <FaLinkedin />,
  },
  {
    id: "4",
    url: "https://www.instagram.com",
    icon: <FaInstagram />,
  },
  {
    id: 5,
    url: "https://www.sketch.com",
    icon: <FaSketch />,
  },
];
