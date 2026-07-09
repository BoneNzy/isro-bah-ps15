type BadgeVariant = "blue" | "red" | "orange" | "green" | "purple" | "neutral";

type BadgeProps = {
  children: React.ReactNode;
  variant?: BadgeVariant;
};

const variantMap: Record<BadgeVariant, string> = {
  blue: "bg-[var(--blue-soft)] text-[var(--blue)]",
  red: "bg-[var(--red-soft)] text-[var(--red)]",
  orange: "bg-[var(--orange-soft)] text-[var(--orange)]",
  green: "bg-[var(--green-soft)] text-[var(--green)]",
  purple: "bg-[var(--purple-soft)] text-[var(--purple)]",
  neutral: "bg-slate-100 text-slate-700",
};

const Badge = ({ children, variant = "neutral" }: BadgeProps) => {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-1 text-[0.8rem] font-semibold ${variantMap[variant]}`}
    >
      {children}
    </span>
  );
};

export default Badge;