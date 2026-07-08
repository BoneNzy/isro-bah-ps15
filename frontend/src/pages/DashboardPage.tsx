import { useEffect, useState } from "react";
import { fetchEvents, fetchLightcurves, fetchStatus } from "../services/api";
import type { EventItem, LightCurvePoint, StatusResponse } from "../types/api";
import StatusCard from "../components/cards/StatusCard";
import AlertBanner from "../components/cards/AlertBanner";
import LightCurveChart from "../components/charts/LightCurveChart";
import EventTable from "../components/tables/EventTable";

const DashboardPage = () => {
  const [status, setStatus] = useState<StatusResponse | null>(null);
  const [lightcurves, setLightcurves] = useState<LightCurvePoint[]>([]);
  const [events, setEvents] = useState<EventItem[]>([]);

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

  const x = lightcurves.map((d) => d.timestamp);
  const softY = lightcurves.map((d) => d.solexs_flux);
  const hardY = lightcurves.map((d) => d.hel1os_flux);

  return (
    <div className="space-y-6">
      {status && (
        <>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            <StatusCard title="Current Solar State" value={status.state} />
            <StatusCard
              title="Flare Probability (15 min)"
              value={`${Math.round(status.flare_probability_15m * 100)}%`}
            />
            <StatusCard title="Nowcast State" value={status.nowcast_state} />
            <StatusCard
              title="Latest Event"
              value={status.latest_event.event_id}
              subtitle={`Peak: ${status.latest_event.peak_time}`}
            />
          </div>

          <AlertBanner message="High flare probability in next 15 minutes. Monitor precursor activity." />
        </>
      )}

      <div className="grid gap-6 xl:grid-cols-2">
        <LightCurveChart
          title="SoLEXS Soft X-ray Light Curve"
          x={x}
          y={softY}
          yLabel="Soft X-ray Flux"
          color="#2563eb"
        />

        <LightCurveChart
          title="HEL1OS Hard X-ray Light Curve"
          x={x}
          y={hardY}
          yLabel="Hard X-ray Flux"
          color="#dc2626"
        />
      </div>

      <EventTable events={events} />
    </div>
  );
};

export default DashboardPage;