export type StatusResponse = {
  state: string;
  flare_probability_15m: number;
  nowcast_state: string;
  latest_event: {
    event_id: string;
    peak_time: string;
  };
  last_updated: string;
};

export type LightCurvePoint = {
  timestamp: string;
  solexs_flux: number;
  hel1os_flux: number;
};

export type ForecastTimelinePoint = {
  timestamp: string;
  probability: number;
};

export type ForecastResponse = {
  p_5min: number;
  p_10min: number;
  p_15min: number;
  p_30min: number;
  precursor_score: number;
  timeline: ForecastTimelinePoint[];
};

export type NowcastResponse = {
  state: string;
  confidence: number;
  flare_phase: string;
  trigger_reason: string[];
};

export type EventItem = {
  event_id: string;
  start_time: string;
  peak_time: string;
  end_time: string;
  soft_peak: number;
  hard_peak: number;
  lead_time: number;
  confidence: number;
  status: string;
};

export type MetricsResponse = {
  forecast_model: string;
  nowcast_method: string;
  precision: number;
  recall: number;
  false_alarm_rate: number;
  average_lead_time: number;
};