import { useState, type HTMLAttributes } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import { Navbar } from "./navbar";
type HeaderProps = HTMLAttributes<HTMLHeadElement>;

export const Header = ({ ...props }: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      {...props}
      className={`
        w-full h-13 relative bg-white shadow-md text-gray-600
        flex items-center justify-between
        ${isOpen && "h-svh"}
        transition-all duration-300
      `}
    >
      <Navbar
        className="
          container flex mx-auto p-4 items-center justify-between text-center
          flex-col sm:flex-row gap-10 transition-all duration-300
        "
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-4 sm:hidden absolute right-0 top-0"
      >
        {isOpen ? <IoCloseSharp size={24} /> : <GiHamburgerMenu size={20} />}
      </button>
    </header>
  );
};
