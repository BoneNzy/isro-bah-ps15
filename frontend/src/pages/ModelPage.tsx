import { useEffect, useState } from "react";
import { fetchMetrics } from "../services/api";
import type { MetricsResponse } from "../types/api";
import StatusCard from "../components/cards/StatusCard";

const ModelPage = () => {
  const [metrics, setMetrics] = useState<MetricsResponse | null>(null);

  useEffect(() => {
    fetchMetrics().then(setMetrics);
  }, []);

  if (!metrics) return <div>Loading model metrics...</div>;

  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <StatusCard title="Precision" value={metrics.precision} />
        <StatusCard title="Recall" value={metrics.recall} />
        <StatusCard
          title="False Alarm Rate"
          value={metrics.false_alarm_rate}
        />
        <StatusCard
          title="Avg Lead Time"
          value={`${metrics.average_lead_time} min`}
        />
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-slate-900">Model Summary</h3>
        <p className="mt-3 text-slate-600">
          <strong>Forecast model:</strong> {metrics.forecast_model}
        </p>
        <p className="mt-2 text-slate-600">
          <strong>Nowcast method:</strong> {metrics.nowcast_method}
        </p>
      </div>
    </div>
  );
};

export default ModelPage;