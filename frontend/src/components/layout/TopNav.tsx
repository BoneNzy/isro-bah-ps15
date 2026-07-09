import { NavLink } from "react-router-dom";

const navItems = [
  { label: "Live Dashboard", path: "/" },
  { label: "Forecasting", path: "/forecast" },
  { label: "Nowcasting", path: "/nowcast" },
  { label: "Event Catalogue", path: "/events" },
  { label: "Model & Analytics", path: "/model" },
];

const TopNav = () => {
  return (
    <header className="sticky top-0 z-30 border-b border-[var(--border)] bg-white">
      <div className="flex items-center justify-between gap-6 px-5 py-3">
        <div className="flex min-w-0 items-center gap-4">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[var(--purple)] text-white shadow-sm">
            <span className="text-lg font-bold">☼</span>
          </div>

          <div className="min-w-0">
            <h1 className="truncate text-[1.15rem] font-extrabold tracking-tight text-[var(--text)]">
              Solar Flare Forecasting &amp; Nowcasting System
            </h1>
            <p className="mono-meta text-[0.78rem] uppercase tracking-[0.18em] text-[var(--muted)]">
              Aditya-L1 • SoLEXS + HEL1OS • ISRO Space Weather
            </p>
          </div>
        </div>

        <nav className="hidden items-center gap-2 lg:flex">
          {navItems.map((item, index) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/"}
              className={({ isActive }) =>
                [
                  "rounded-xl px-4 py-2 text-[0.95rem] font-medium transition",
                  isActive
                    ? "bg-[var(--blue-soft)] text-[var(--blue)]"
                    : "text-[var(--muted)] hover:bg-slate-50 hover:text-[var(--text)]",
                ].join(" ")
              }
            >
              <span className="mono-meta mr-2 text-[0.72rem] text-[var(--muted)]">
                0{index + 1}
              </span>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <div className="flex items-center gap-2 text-[0.9rem] text-[var(--muted)]">
            <span className="h-2.5 w-2.5 rounded-full bg-[#93e6b3]" />
            <span className="mono-meta">Mon, 06 Jul 2026 19:31:08 UTC</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopNav;