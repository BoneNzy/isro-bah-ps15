type SectionTitleProps = {
  title: string;
  subtitle?: string;
  rightSlot?: React.ReactNode;
};

const SectionTitle = ({ title, subtitle, rightSlot }: SectionTitleProps) => {
  return (
    <div className="mb-4 flex items-start justify-between gap-4">
      <div>
        <h2 className="text-[1.15rem] font-bold tracking-tight text-[var(--text)]">
          {title}
        </h2>
        {subtitle ? (
          <p className="mono-meta mt-1 text-[0.9rem] text-[var(--muted)]">
            {subtitle}
          </p>
        ) : null}
      </div>

      {rightSlot ? <div>{rightSlot}</div> : null}
    </div>
  );
};

export default SectionTitle;