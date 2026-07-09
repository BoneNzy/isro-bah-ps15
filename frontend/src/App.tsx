import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppShell from "./components/layout/AppShell";
import DashboardPage from "./pages/DashboardPage";
import ForecastPage from "./pages/ForecastPage";
import NowcastPage from "./pages/NowcastPage";
import EventsPage from "./pages/EventsPage";
import ModelPage from "./pages/ModelPage";

function App() {
  return (
    <BrowserRouter>
      <AppShell>
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/forecast" element={<ForecastPage />} />
          <Route path="/nowcast" element={<NowcastPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/model" element={<ModelPage />} />
        </Routes>
      </AppShell>
    </BrowserRouter>
  );
}

export default App;