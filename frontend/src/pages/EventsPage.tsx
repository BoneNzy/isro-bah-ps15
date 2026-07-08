import { useEffect, useState } from "react";
import { fetchEvents } from "../services/api";
import type { EventItem } from "../types/api";
import EventTable from "../components/tables/EventTable";

const EventsPage = () => {
  const [events, setEvents] = useState<EventItem[]>([]);

  useEffect(() => {
    fetchEvents().then(setEvents);
  }, []);

  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-slate-900">
          Flare Event Catalogue
        </h2>
        <p className="mt-2 text-slate-600">
          This page will later support filtering by date range, confidence,
          lead time, and flare severity.
        </p>
      </div>

      <EventTable events={events} />
    </div>
  );
};

export default EventsPage;