import { useEffect, useState } from "react";
import PageContainer from "../components/layout/PageContainer";
import ControlPanel from "../components/dashboard/ControlPanel";
import AlertStrip from "../components/dashboard/AlertStrip";
import TelemetryCard from "../components/dashboard/TelemetryCard";
import ChartPanel from "../components/dashboard/ChartPanel";
import {
  fetchEvents,
  fetchLightcurves,
  fetchStatus,
} from "../services/api";
import type { EventItem, LightCurvePoint, StatusResponse } from "../types/api";

const DashboardPage = () => {
  const [status, setStatus] = useState<StatusResponse | null>(null);
  const [lightcurves, setLightcurves] = useState<LightCurvePoint[]>([]);
  const [, setEvents] = useState<EventItem[]>([]);

  useEffect(() => {
    async function loadData() {
      const [statusData, lightcurveData, eventsData] = await Promise.all([
        fetchStatus(),
        fetchLightcurves(),
        fetchEvents(),
      ]);
      setStatus(statusData);
      setLightcurves(lightcurveData);
      setEvents(eventsData);
    }

    loadData();
  }, []);

  const x = lightcurves.map((d) =>
    new Date(d.timestamp).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    }),
  );
  const softY = lightcurves.map((d) => d.solexs_flux);
  const hardY = lightcurves.map((d) => d.hel1os_flux);

  return (
    <div className="min-h-[calc(100vh-70px)]">
      <AlertStrip
        message="ACTIVE FLARE DETECTED — M4.1 class event ongoing. Onset: 09:42 UTC. Peak: ~09:50 UTC."
        rightText="09:42:17 UTC"
      />

      <div className="flex min-h-[calc(100vh-130px)]">
        <ControlPanel />

        <PageContainer>
          <div className="space-y-5">
            {status && (
              <div className="grid gap-4 xl:grid-cols-4">
                <TelemetryCard
                  label="Solar State"
                  value="Active Flare"
                  badgeText="Live"
                  badgeVariant="red"
                  valueColorClass="text-[var(--red)]"
                />
                <TelemetryCard
                  label="Flare Prob. (Next 15 min)"
                  value="87%"
                  badgeText="High"
                  badgeVariant="orange"
                  valueColorClass="text-[var(--orange)]"
                  subtext="M-class threshold • M1.0"
                />
                <TelemetryCard
                  label="Active Flare Phase"
                  value="Impulsive"
                  badgeText="Ongoing"
                  badgeVariant="red"
                  valueColorClass="text-[var(--red)]"
                  subtext="M4.1 • onset 09:42 UTC"
                />
                <TelemetryCard
                  label="Last Alert"
                  value="09:28 UTC"
                  badgeText="M4.1"
                  badgeVariant="orange"
                  subtext="Forecast alert issued • +14 min lead"
                />
              </div>
            )}

            <ChartPanel
              title="SoLEXS — Soft X-ray Light Curve (1–8 Å)"
              unit="W/m²"
              x={x}
              y={softY}
              lineColor="#2458ff"
            />

            <ChartPanel
              title="HEL1OS — Hard X-ray Light Curve (15–100 keV)"
              unit="cts/s"
              x={x}
              y={hardY}
              lineColor="#7a3cff"
            />
          </div>
        </PageContainer>
      </div>
    </div>
  );
};

export default DashboardPage;