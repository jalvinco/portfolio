type Props = {
  eyebrow: string;
  title: string;
  description?: string;
};

function SectionTitle({
  eyebrow,
  title,
  description,
}: Props) {
  return (
    <div className="mb-12">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-500">
        {eyebrow}
      </p>

      <h2 className="mt-3 text-4xl font-bold">
        {title}
      </h2>

      {description && (
        <p className="mt-4 max-w-2xl text-zinc-400">
          {description}
        </p>
      )}
    </div>
  );
}

export default SectionTitle;
