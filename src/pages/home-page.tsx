import type { HTMLAttributes } from "react";

type HomePageProps = HTMLAttributes<HTMLElement> & {
  title: string;
  description: string;
};

export const HomePage = ({ title, description, ...props }: HomePageProps) => {
  return (
    <main {...props}>
      <h1 className="text-2xl font-semibold text-gray-900">{title}</h1>
      <p>{description}</p>
    </main>
  );
};
