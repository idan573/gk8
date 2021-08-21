import {
  ColDef,
  GridOptions,
  GridApi,
  GridReadyEvent,
  IServerSideDatasource,
  SelectionChangedEvent,
  RowNode,
  BodyScrollEvent,
} from "ag-grid-community";

export interface IDataGridOptions extends GridOptions {
  handleSelection?: React.Dispatch<React.SetStateAction<RowNode[]>>;
  selectedData?: RowNode[];
  handleShowButtonEnabled?: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IDataGridColDef extends ColDef {}

export interface IDataGridEvent extends GridReadyEvent {}

export interface IRowSelectionChangedEvent extends SelectionChangedEvent {}

export interface IScrollChangedEvent extends BodyScrollEvent {}

export interface IDataGridApi extends GridApi {}

export interface IDataGridDataSource extends IServerSideDatasource {}

export interface IDataGridNode extends RowNode {}

export interface IDataGridParams {
  node: IDataGridNode;
  data: any;
  successCallback: (rows: any) => void;
  rowIndex: number;
}
export interface IDataGridSortModel {
  colId: string;
  sort: string;
}

export enum DataGridFilterTypeString {
  GeneralFilter = "agSetColumnFilter",
  NumberFilter = "agNumberColumnFilter",
  DateFilter = "agDateColumnFilter",
  TextFilter = "agTextColumnFilter",
}

export enum FilterTypes {
  Date = "date",
  Number = "number",
}

export enum OperatorTypes {
  Equals = "equals",
  GreaterThan = "greaterThan",
  LessThan = "lessThan",
  InRange = "inRange",
  NotEqual = "notEqual",
  LessThanOrEquals = "lessThanOrEqual",
  GreaterThanOrEquals = "greaterThanOrEqual",
}

export enum ExpOperatorTypes {
  And = "AND",
  Or = "OR",
}

export enum ServerRowModel {
  ClientSide = "clientSide",
  ServerSide = "serverSide",
  Infinite = "infinite",
}
