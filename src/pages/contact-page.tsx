import type { HTMLAttributes } from "react";

type ContactPageProps = HTMLAttributes<HTMLElement> & {
  title: string;
  description: string;
};

export const ContactPage = ({
  title,
  description,
  ...props
}: ContactPageProps) => {
  return (
    <main {...props}>
      <h1 className="text-2xl font-semibold text-gray-900">{title}</h1>
      <p>{description}</p>
    </main>
  );
};
