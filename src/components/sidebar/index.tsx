import type { HTMLAttributes } from "react";
import { useAppContext } from "../../context";
import { pages } from "../../data";
import { Social } from "../Social";
import { NavLink } from "react-router-dom";

type SidebarProps = HTMLAttributes<HTMLElement>;

export const Sidebar = ({ ...props }: SidebarProps) => {
  const { isSidebarOpen, setIsSidebarOpen } = useAppContext();

  return (
    <aside
      {...props}
      onMouseLeave={() => setIsSidebarOpen(false)}
      onMouseEnter={() => setIsSidebarOpen(true)}
    >
      <ul className="flex flex-col gap-2">
        {pages.map(({ id, title, path, icon }) => (
          <li key={id} className="text-gray-600 hover:text-gray-900">
            <NavLink to={path} className="flex items-center gap-4 capitalize" >
              {icon}
              <h3 className={`${isSidebarOpen ? "block" : "hidden"}`}>{title}</h3>
            </NavLink>
          </li>
        ))}
      </ul>
      <Social className={`${isSidebarOpen ? "block" : "hidden"}`} />
    </aside>
  );
};

