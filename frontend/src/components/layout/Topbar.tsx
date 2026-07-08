const Topbar = () => {
  return (
    <header className="flex items-center justify-between border-b border-slate-200 bg-white px-6 py-4">
      <div>
        <h2 className="text-xl font-semibold text-slate-900">
          Solar Flare Forecasting & Nowcasting
        </h2>
        <p className="text-sm text-slate-500">
          Scientific monitoring dashboard for Aditya-L1 flare analysis
        </p>
      </div>

      <div className="text-sm text-slate-500">
        UTC {new Date().toUTCString()}
      </div>
    </header>
  );
};

export default Topbar;