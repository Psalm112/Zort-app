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
  type?: any;
  value: number;
  payload: ChartDataPayload;
}

export type ChartDataArray = ChartDataItem[];

export interface ChartItemPayload {
  name: string;
  value: number;
}

export interface ChartItem {
  chartType?: any;
  color?: string;
  dataKey: string;
  formatter?: any;
  hide: boolean;
  name: string;
  type?: any;
  unit?: any;
  value: number;
  payload: ChartItemPayload;
  radius: Record<number, number>;
}

export type ChartItemArray = ChartItem[];
