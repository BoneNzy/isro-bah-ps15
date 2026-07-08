import type { EventItem } from "../../types/api";

type EventTableProps = {
  events?: EventItem[];
};

const EventTable = ({ events = [] }: EventTableProps) => {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="border-b border-slate-200 px-5 py-4">
        <h3 className="text-lg font-semibold text-slate-900">
          Flare Event Log
        </h3>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead className="bg-slate-50 text-left text-slate-600">
            <tr>
              <th className="px-4 py-3">Event ID</th>
              <th className="px-4 py-3">Start</th>
              <th className="px-4 py-3">Peak</th>
              <th className="px-4 py-3">Lead Time</th>
              <th className="px-4 py-3">Confidence</th>
              <th className="px-4 py-3">Status</th>
            </tr>
          </thead>

          <tbody>
            {events.map((event) => (
              <tr key={event.event_id} className="border-t border-slate-100">
                <td className="px-4 py-3 font-medium text-slate-900">
                  {event.event_id}
                </td>
                <td className="px-4 py-3">{event.start_time}</td>
                <td className="px-4 py-3">{event.peak_time}</td>
                <td className="px-4 py-3">{event.lead_time} min</td>
                <td className="px-4 py-3">{event.confidence}</td>
                <td className="px-4 py-3">{event.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EventTable;