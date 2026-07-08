import { NavLink } from "react-router-dom";

const linkBase = "block rounded-xl px-4 py-3 text-sm font-medium transition";
const activeClass = "bg-slate-900 text-white";
const inactiveClass = "text-slate-700 hover:bg-slate-100";

const Sidebar = () => {
  return (
    <aside className="w-64 border-r border-slate-200 bg-white p-4">
      <div className="mb-6">
        <h1 className="text-lg font-bold text-slate-900">
          Solar Flare Monitor
        </h1>
        <p className="text-sm text-slate-500">Aditya-L1 | SoLEXS + HEL1OS</p>
      </div>

      <nav className="space-y-2">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            `${linkBase} ${isActive ? activeClass : inactiveClass}`
          }
        >
          Dashboard
        </NavLink>

        <NavLink
          to="/forecast"
          className={({ isActive }) =>
            `${linkBase} ${isActive ? activeClass : inactiveClass}`
          }
        >
          Forecast
        </NavLink>

        <NavLink
          to="/nowcast"
          className={({ isActive }) =>
            `${linkBase} ${isActive ? activeClass : inactiveClass}`
          }
        >
          Nowcast
        </NavLink>

        <NavLink
          to="/events"
          className={({ isActive }) =>
            `${linkBase} ${isActive ? activeClass : inactiveClass}`
          }
        >
          Events
        </NavLink>

        <NavLink
          to="/model"
          className={({ isActive }) =>
            `${linkBase} ${isActive ? activeClass : inactiveClass}`
          }
        >
          Model
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;