import type { HTMLAttributes } from "react";

type ProjectsPageProps = HTMLAttributes<HTMLElement> & {
  title: string;
  description: string;
};

export const ProjectsPage = ({
  title,
  description,
  ...props
}: ProjectsPageProps) => {
  return (
    <main {...props}>
      <h1 className="text-2xl font-semibold text-gray-900">{title}</h1>
      <p>{description}</p>
    </main>
  );
};
