import { DataGridFilterTypeString, IDataGridColDef } from "../models";
import {
  TextCellRenderer,
  ICellRendererProps,
} from "./renderers/TextCell/TextCellRenderer";

export function getNumberColumn(
  title: string | JSX.Element,
  field: string,
  width?: number,
  sortable?: boolean
): IDataGridColDef {
  return {
    field,
    sortable,
    headerName: title as string,
    width,
    cellRendererFramework: TextCellRenderer,
    filter: DataGridFilterTypeString.NumberFilter,
    filterParams: {
      suppressAndOrCondition: true,
      filterOptions: [
        "equals",
        "lessThan",
        "lessThanOrEqual",
        "greaterThan",
        "greaterThanOrEqual",
        "inRange",
      ],
    },
    valueGetter: (params) => {
      return params.data
        ? ({
            text: params.data[field],
          } as ICellRendererProps)
        : undefined;
    },
    comparator: (valueA, valueB, nodeA, nodeB, isInverted) => {
      if (valueA.text > valueB.text) {
        return -1;
      } else if (valueA.text < valueB.text) {
        return 1;
      } else {
        return 0;
      }
    },
  };
}
