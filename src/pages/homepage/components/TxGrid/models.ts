import { getDateTimeColumn } from "../../../../components/AppDataGrid/columns/dateTime";
import { getTextColumn } from "../../../../components/AppDataGrid/columns/text";
import {
  IDataGridColDef,
  IDataGridOptions,
} from "../../../../components/AppDataGrid/models";
import { TransactionDataSource } from "./txDataSource";

export const PAGINATION_PER_PAGE = 2;
export const BULK_SIZE = PAGINATION_PER_PAGE * 2;

export const transactionsColumns: IDataGridColDef[] = [
  getTextColumn("ID", "id", 100),
  getDateTimeColumn("Time", "date", 110, true),
];

export const gridOptions: IDataGridOptions = {
  suppressCellSelection: true,
  rowSelection: "single",
  pagination: true,
  paginationPageSize: PAGINATION_PER_PAGE,
  cacheBlockSize: BULK_SIZE,
  //serverSideDatasource: new TransactionDataSource(),
  enableCellTextSelection: true,
  suppressContextMenu: true,
  defaultColDef: {
    resizable: true,
  },
};
