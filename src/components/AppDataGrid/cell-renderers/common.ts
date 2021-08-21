import { ICellRendererParams } from "ag-grid-community";

export interface ICellRendererParamsStrong<T> extends ICellRendererParams {
  value: T;
}
