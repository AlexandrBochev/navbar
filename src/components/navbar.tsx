import type { Dispatch, HTMLAttributes, SetStateAction } from "react";
import { IoLogoApple } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";
import { pages, social } from "../data";

type NavbarProps = HTMLAttributes<HTMLDivElement> & {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

export const Navbar = ({ isOpen, setIsOpen, ...props }: NavbarProps) => {
  return (
    <nav {...props}>
      <Link
        to="/"
        onClick={() => setIsOpen(false)}
        className="absolute top-4 left-4 sm:static"
      >
        <IoLogoApple className="text-xl hover:text-gray-900" />
      </Link>
      <ul
        className={`
          flex gap-4 flex-col absolute -top-46
          sm:flex-row sm:static ${isOpen && "static"}
        `}
      >
        {pages.map(({ id, path, title }) => (
          <li key={id} className="capitalize hover:text-gray-900">
            <NavLink
              to={path}
              onClick={() => setIsOpen(false)}
              end
              className={({ isActive }) => isActive ? "text-gray-900 font-semibold" : ""}
            >
              {title}
            </NavLink>
          </li>
        ))}
      </ul>
      <ul className="flex space-x-2">
        {social.map(({ id, url, icon }) => (
          <li key={id}>
            <Link
              to={url}
              // onClick={() => setIsOpen(false)}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-900"
            >
              {icon}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
