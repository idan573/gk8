import {
  DataGridFilterTypeString,
  IDataGridColDef,
} from "../../AppDataGrid/models";
import {
  DateTimeRenderer,
  ICellRendererProps,
} from "./renderers/DateTimeRenderer/DateTimeRenderer";
import { ITooltipParams } from "ag-grid-community";
import { DEFAULT_TIMESTAMP_FORMAT } from "../../../utils/DateFormats";

export function getDateTimeColumn(
  title: string,
  field: string,
  width?: number,
  sortable?: boolean,
  filter?: DataGridFilterTypeString,
  isMillis: boolean = false,
  getToolTipData?: (params: ITooltipParams) => string,
  localTime: boolean = false,
  maxWidth?: number,
  format: string = DEFAULT_TIMESTAMP_FORMAT
): IDataGridColDef {
  return {
    field,
    sortable,
    headerName: localTime ? title : title + " (UTC)",
    width: width,
    maxWidth,
    filter,
    filterParams: {
      filterOptions: ["equals", "lessThan", "greaterThan", "inRange"],
      suppressAndOrCondition: true,
    },
    cellRendererFramework: DateTimeRenderer,
    tooltipValueGetter: getToolTipData,
    valueGetter: (params) => {
      return params.data
        ? ({
            timestamp: !isMillis
              ? 1000 * +params.data[field]
              : +params.data[field],
            localTime,
            format,
          } as ICellRendererProps)
        : undefined;
    },
    comparator: (valueA, valueB) => {
      if (valueA.timestamp > valueB.timestamp) {
        return -1;
      } else if (valueA.timestamp < valueB.timestamp) {
        return 1;
      } else {
        return 0;
      }
    },
  };
}
