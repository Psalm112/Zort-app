export interface ChartDataPayloadInner {
  name: string;
  total: number;
  value: number;
}

export interface ChartDataPayload {
  cx: string;
  cy: string;
  fill: string;
  name: string;
  stroke: string;
  total: number;
  value: number;
  payload: ChartDataPayloadInner;
}

export interface ChartDataItem {
  dataKey: string;
  name: string;
  type?: "line" | "bar" | "area" | "scatter" | "pie" | "radar" | "radialBar";
  value: number;
  payload: ChartDataPayload;
}

export type ChartDataArray = ChartDataItem[];

export interface ChartItemPayload {
  name: string;
  value: number;
}

export interface ChartItem {
  chartType?: "line" | "bar" | "area" | "pie" | "scatter" | "radar" | "radialBar";
  color?: string;
  dataKey: string;
  formatter?: (value: string | number, name: string) => string;
  hide: boolean;
  name: string;
  type?: "monotone" | "natural" | "basis" | "linear" | "step" | "stepBefore" | "stepAfter";
  unit?: string | number;
  value: number;
  payload: ChartItemPayload;
  radius: Record<number, number>;
}

export type ChartItemArray = ChartItem[];
