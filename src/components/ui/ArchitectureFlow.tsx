type Props = {
  steps: string[];
};

function ArchitectureFlow({ steps }: Props) {
  return (
    <div className="mt-10 flex flex-wrap items-center gap-3">
      {steps.map((step, index) => (
        <div key={step} className="flex items-center gap-3">
          <div className="rounded-lg border border-zinc-700 px-4 py-2">
            {step}
          </div>

          {index < steps.length - 1 && (
            <span className="text-zinc-500">→</span>
          )}
        </div>
      ))}
    </div>
  );
}

export default ArchitectureFlow;
