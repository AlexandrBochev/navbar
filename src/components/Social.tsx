import { Link } from "react-router-dom";
import { social } from "../data";
import type { HTMLAttributes } from "react";

type SocialType = HTMLAttributes<HTMLElement> & {
  className?: string
}

export const Social = ({ className, ...props }: SocialType) => {
  return (
    <ul className={`flex space-x-2 ${className}`} {...props}>
      {social.map(({ id, url, icon }) => (
        <li key={id}>
          <Link
            to={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900"
          >
            {icon}
          </Link>
        </li>
      ))}
    </ul>
  );
};
