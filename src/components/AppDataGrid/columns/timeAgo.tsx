import moment from "moment";
import { DEFAULT_TIMESTAMP_FORMAT } from "../../../utils/DateFormats";

import { DataGridFilterTypeString, IDataGridColDef } from "../models";
import {
  ICellRendererProps,
  TimeAgoRenderer,
} from "./renderers/TimeAgoRenderer/TimeAgoRenderer";

export function getTimeAgoColumn(
  title: string,
  field: string,
  width?: number,
  sortable?: boolean,
  filter?: DataGridFilterTypeString,
  isMillis: boolean = false,
  localTime: boolean = false,
  maxWidth?: number,
  format: string = DEFAULT_TIMESTAMP_FORMAT
): IDataGridColDef {
  return {
    field,
    sortable,
    headerName: title,
    width: width,
    maxWidth,
    filter,
    filterParams: {
      filterOptions: ["equals", "lessThan", "greaterThan", "inRange"],
      suppressAndOrCondition: true,
    },
    cellRendererFramework: TimeAgoRenderer,
    valueGetter: (params) => {
      return params.data
        ? ({
            timestamp: !isMillis
              ? 1000 * +params.data[field]
              : +params.data[field],
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
