import { FaFacebook, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
import { HomePage } from '../pages/home-page';
import { AboutPage } from '../pages/about-page';
import { ProjectsPage } from '../pages/projects-page';
import { ContactPage } from '../pages/contact-page';
import { ProfilePage } from '../pages/profile-page';

export const pages = [
  {
    id: "1",
    path: '/',
    title: 'home',
    description: 'this is the home page',
    component: HomePage,
  },
  {
    id: "2",
    path: '/about',
    title: 'about',
    description: 'this is the about page',
    component: AboutPage,
  },
  {
    id: "3",
    path: '/projects',
    title: 'projects',
    description: 'this is the projects page',
    component: ProjectsPage,
  },
  {
    id: "4",
    path: '/contact',
    title: 'contact',
    description: 'this is the contact page',
    component: ContactPage,
  },
  {
    id: "5",
    path: '/profile',
    title: 'profile',
    component: ProfilePage,
    description: 'this is the profile page',
  },
];

export const social = [
  {
    id: "1",
    url: 'https://www.facebook.com',
    icon: <FaFacebook />,
  },
  {
    id: "2",
    url: 'https://www.twitter.com',
    icon: <FaTwitter />,
  },
  {
    id: "3",
    url: 'https://www.linkedin.com',
    icon: <FaLinkedin />,
  },
  {
    id: "4",
    url: 'https://www.instagram.com',
    icon: <FaInstagram />,
  },
];
