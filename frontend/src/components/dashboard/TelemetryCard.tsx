import Badge from "../common/Badge";

type TelemetryCardProps = {
  label: string;
  value: string;
  subtext?: string;
  badgeText?: string;
  badgeVariant?: "blue" | "red" | "orange" | "green" | "purple" | "neutral";
  valueColorClass?: string;
};

const TelemetryCard = ({
  label,
  value,
  subtext,
  badgeText,
  badgeVariant = "neutral",
  valueColorClass = "text-[var(--text)]",
}: TelemetryCardProps) => {
  return (
    <div className="panel p-5">
      <p className="telemetry-label mono-meta">{label}</p>

      <div className="mt-3 flex items-center gap-3">
        <h3 className={`text-[2.05rem] font-extrabold tracking-tight ${valueColorClass}`}>
          {value}
        </h3>
        {badgeText ? <Badge variant={badgeVariant}>{badgeText}</Badge> : null}
      </div>

      {subtext ? (
        <p className="mono-meta mt-3 text-[0.95rem] text-[var(--muted)]">{subtext}</p>
      ) : null}
    </div>
  );
};

export default TelemetryCard;