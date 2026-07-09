import Plot from "react-plotly.js";

type ChartPanelProps = {
  title: string;
  unit: string;
  x: string[];
  y: number[];
  lineColor: string;
};

const ChartPanel = ({ title, unit, x, y, lineColor }: ChartPanelProps) => {
  return (
    <div className="panel overflow-hidden p-0">
      <div className="flex items-center justify-between px-4 py-3">
        <h3 className="text-[1.05rem] font-semibold text-[var(--text)]">{title}</h3>
        <span className="mono-meta text-[0.86rem] uppercase tracking-[0.16em] text-[var(--muted)]">
          Unit: {unit}
        </span>
      </div>

      <div className="px-2 pb-2">
        <Plot
          data={[
            {
              x,
              y,
              type: "scatter",
              mode: "lines",
              line: { color: lineColor, width: 3 },
              fill: "tozeroy",
              fillcolor: "rgba(40,40,40,0.65)",
              hovertemplate: "%{x}<br>%{y}<extra></extra>",
            },
            {
              x: [x[18], x[18]],
              y: [Math.min(...y), Math.max(...y)],
              type: "scatter",
              mode: "lines",
              line: { color: "#e6a323", width: 2, dash: "dot" },
              hoverinfo: "skip",
              showlegend: false,
            },
            {
              x: [x[42], x[42]],
              y: [Math.min(...y), Math.max(...y)],
              type: "scatter",
              mode: "lines",
              line: { color: "#ff5a1f", width: 2, dash: "dot" },
              hoverinfo: "skip",
              showlegend: false,
            },
            {
              x: [x[x.length - 1], x[x.length - 1]],
              y: [Math.min(...y), Math.max(...y)],
              type: "scatter",
              mode: "lines",
              line: { color: "#ff3b30", width: 2, dash: "dot" },
              hoverinfo: "skip",
              showlegend: false,
            },
          ]}
          layout={{
            autosize: true,
            height: 285,
            margin: { l: 55, r: 16, t: 10, b: 42 },
            paper_bgcolor: "white",
            plot_bgcolor: "white",
            showlegend: false,
            xaxis: {
              tickfont: { color: "#6f87b5", size: 11 },
              gridcolor: "rgba(0,0,0,0)",
              zeroline: false,
            },
            yaxis: {
              tickfont: { color: "#6f87b5", size: 11 },
              gridcolor: "#dfe8f7",
              griddash: "dot",
              zeroline: false,
            },
          }}
          style={{ width: "100%" }}
          config={{ responsive: true, displayModeBar: false }}
        />
      </div>
    </div>
  );
};

export default ChartPanel;