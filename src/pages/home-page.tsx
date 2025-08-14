import type { HTMLAttributes } from "react";
import { useAppContext } from "../context";

type HomePageProps = HTMLAttributes<HTMLElement> & {
  title: string;
  description: string;
};

export const HomePage = ({ title, description, ...props }: HomePageProps) => {
  const { setIsModalOpen } = useAppContext();
  return (
    <main {...props}>
      <h1 className="text-2xl font-semibold text-gray-900">{title}</h1>
      <p className="mb-4">{description}</p>
      <button
        onClick={() => setIsModalOpen(true)}
        className="bg-blue-500 text-white px-3 py-1 rounded cursor-pointer hover:bg-blue-600 transition"
      >
        Open modal
      </button>
    </main>
  );
};
