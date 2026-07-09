type AlertStripProps = {
  message: string;
  rightText?: string;
};

const AlertStrip = ({ message, rightText }: AlertStripProps) => {
  return (
    <div className="flex items-center justify-between border-y border-[var(--border)] bg-[var(--red-soft)] px-5 py-4">
      <div className="flex items-center gap-4">
        <div className="h-8 w-1 rounded-full bg-[var(--red)]" />
        <div className="flex items-center gap-3">
          <span className="text-lg text-[var(--red)]">▲</span>
          <p className="text-[1rem] font-medium text-[#b32a1e]">{message}</p>
        </div>
      </div>

      {rightText && (
        <div className="mono-meta text-[0.95rem] text-[#c25b4d]">
          {rightText}
        </div>
      )}
    </div>
  );
};

export default AlertStrip;