import { useEffect, useState } from "react";
import { fetchForecast } from "../services/api";
import type { ForecastResponse } from "../types/api";
import StatusCard from "../components/cards/StatusCard";

const ForecastPage = () => {
  const [forecast, setForecast] = useState<ForecastResponse | null>(null);

  useEffect(() => {
    fetchForecast().then(setForecast);
  }, []);

  if (!forecast) return <div>Loading forecast...</div>;

  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <StatusCard
          title="Next 5 min"
          value={`${Math.round(forecast.p_5min * 100)}%`}
        />
        <StatusCard
          title="Next 10 min"
          value={`${Math.round(forecast.p_10min * 100)}%`}
        />
        <StatusCard
          title="Next 15 min"
          value={`${Math.round(forecast.p_15min * 100)}%`}
        />
        <StatusCard
          title="Next 30 min"
          value={`${Math.round(forecast.p_30min * 100)}%`}
        />
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-slate-900">
          Precursor Summary
        </h3>
        <p className="mt-3 text-slate-600">
          Precursor score:{" "}
          <span className="font-semibold">{forecast.precursor_score}</span>
        </p>
        <p className="mt-2 text-slate-600">
          This page will later show rolling soft X-ray rise, hard X-ray
          activity, soft/hard ratio, and forecast probability timeline.
        </p>
      </div>
    </div>
  );
};

export default ForecastPage;