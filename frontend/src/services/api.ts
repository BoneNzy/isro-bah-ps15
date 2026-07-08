import type {
  StatusResponse,
  LightCurvePoint,
  ForecastResponse,
  NowcastResponse,
  EventItem,
  MetricsResponse,
} from "../types/api";

const API_BASE = "http://127.0.0.1:8000/api";

export async function fetchStatus(): Promise<StatusResponse> {
  const res = await fetch(`${API_BASE}/status`);
  if (!res.ok) throw new Error("Failed to fetch status");
  return res.json();
}

export async function fetchLightcurves(): Promise<LightCurvePoint[]> {
  const res = await fetch(`${API_BASE}/lightcurves`);
  if (!res.ok) throw new Error("Failed to fetch lightcurves");
  return res.json();
}

export async function fetchForecast(): Promise<ForecastResponse> {
  const res = await fetch(`${API_BASE}/forecast`);
  if (!res.ok) throw new Error("Failed to fetch forecast");
  return res.json();
}

export async function fetchNowcast(): Promise<NowcastResponse> {
  const res = await fetch(`${API_BASE}/nowcast`);
  if (!res.ok) throw new Error("Failed to fetch nowcast");
  return res.json();
}

export async function fetchEvents(): Promise<EventItem[]> {
  const res = await fetch(`${API_BASE}/events`);
  if (!res.ok) throw new Error("Failed to fetch events");
  return res.json();
}

export async function fetchMetrics(): Promise<MetricsResponse> {
  const res = await fetch(`${API_BASE}/model/metrics`);
  if (!res.ok) throw new Error("Failed to fetch metrics");
  return res.json();
}