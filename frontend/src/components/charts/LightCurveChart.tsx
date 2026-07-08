import Plot from "react-plotly.js";

type LightCurveChartProps = {
  title: string;
  x: string[];
  y: number[];
  yLabel: string;
  color: string;
};

const LightCurveChart = ({
  title,
  x,
  y,
  yLabel,
  color,
}: LightCurveChartProps) => {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <h3 className="mb-3 text-lg font-semibold text-slate-900">{title}</h3>

      <Plot
        data={[
          {
            x,
            y,
            type: "scatter",
            mode: "lines+markers",
            marker: { size: 5 },
            line: { width: 2, color },
          },
        ]}
        layout={{
          autosize: true,
          height: 320,
          margin: { l: 50, r: 20, t: 20, b: 50 },
          xaxis: { title: "Time" },
          yaxis: { title: yLabel },
          paper_bgcolor: "white",
          plot_bgcolor: "white",
        }}
        style={{ width: "100%" }}
        config={{ responsive: true }}
      />
    </div>
  );
};

export default LightCurveChart;