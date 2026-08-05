import type { ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
};

function Section({
  children,
}: SectionProps) {
  return (
    <section>
      {children}
    </section>
  );
}

export default Section;