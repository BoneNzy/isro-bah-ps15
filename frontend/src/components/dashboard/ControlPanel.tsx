const controlLabelClass = "telemetry-label mono-meta mb-2 block";
const selectClass =
  "w-full rounded-xl border border-[var(--border)] bg-white px-4 py-3 text-[1rem] text-[var(--text)] outline-none";

const ControlPanel = () => {
  return (
    <aside className="flex h-full w-[270px] shrink-0 flex-col border-r border-[var(--border)] bg-white">
      <div className="border-b border-[var(--border)] px-4 py-5">
        <h2 className="mono-meta text-[1rem] font-semibold uppercase tracking-[0.14em] text-[var(--text)]">
          Control Panel
        </h2>
      </div>

      <div className="space-y-6 px-4 py-5">
        <div>
          <label className={controlLabelClass}>Data Source</label>
          <div className="rounded-xl border border-[#bfe9c8] bg-[#f3fff6] px-4 py-3 text-[0.98rem] text-[#15934d]">
            ● SoLEXS • HEL1OS • LIVE
          </div>
        </div>

        <div>
          <label className={controlLabelClass}>Time Range</label>
          <select className={selectClass} defaultValue="Last 60 min">
            <option>Last 30 min</option>
            <option>Last 60 min</option>
            <option>Last 120 min</option>
          </select>
        </div>

        <div>
          <label className={controlLabelClass}>Flare Threshold</label>
          <select className={selectClass} defaultValue="M1.0">
            <option>C1.0</option>
            <option>M1.0</option>
            <option>X1.0</option>
          </select>
        </div>

        <div>
          <label className={controlLabelClass}>Forecast Horizon</label>
          <div className="grid grid-cols-4 gap-2">
            {["5m", "10m", "15m", "30m"].map((item) => (
              <button
                key={item}
                className={`rounded-xl border px-0 py-2 text-[0.95rem] ${
                  item === "15m"
                    ? "border-[var(--blue)] bg-[var(--blue-soft)] font-semibold text-[var(--blue)]"
                    : "border-[var(--border)] bg-white text-[var(--muted)]"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className={controlLabelClass}>Model Version</label>
          <select className={selectClass} defaultValue="v2.3.1">
            <option>v2.3.1</option>
            <option>v2.3.0</option>
          </select>
        </div>

        <div>
          <label className={controlLabelClass}>Simulate State</label>
          <select className={selectClass} defaultValue="Active Flare">
            <option>Quiet</option>
            <option>Precursor</option>
            <option>Active Flare</option>
            <option>Decay</option>
          </select>
        </div>
      </div>

      <div className="mt-auto border-t border-[var(--border)] px-4 py-5">
        <div className="mono-meta space-y-2 text-[0.95rem] text-[var(--muted)]">
          <p>Model: LSTM + CNN Hybrid</p>
          <p>Cadence: 1-min resolution</p>
          <p>ISRO URSC • Aditya-L1</p>
        </div>
      </div>
    </aside>
  );
};

export default ControlPanel;