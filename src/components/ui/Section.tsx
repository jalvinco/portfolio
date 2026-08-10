import type { ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
  className?: string;
};

function Section({ children, className = "" }: SectionProps) {
  return (
    <section
      className={`mx-auto max-w-7xl px-6 py-24 ${className}`}
    >
      {children}
    </section>
  );
}

export default Section;