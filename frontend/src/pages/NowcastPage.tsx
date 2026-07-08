import { useEffect, useState } from "react";
import { fetchNowcast } from "../services/api";
import type { NowcastResponse } from "../types/api";
import StatusCard from "../components/cards/StatusCard";

const NowcastPage = () => {
  const [nowcast, setNowcast] = useState<NowcastResponse | null>(null);

  useEffect(() => {
    fetchNowcast().then(setNowcast);
  }, []);

  if (!nowcast) return <div>Loading nowcast...</div>;

  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-3">
        <StatusCard title="Current State" value={nowcast.state} />
        <StatusCard title="Flare Phase" value={nowcast.flare_phase} />
        <StatusCard
          title="Confidence"
          value={`${Math.round(nowcast.confidence * 100)}%`}
        />
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-slate-900">
          Trigger Reason
        </h3>

        <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-600">
          {nowcast.trigger_reason.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NowcastPage;