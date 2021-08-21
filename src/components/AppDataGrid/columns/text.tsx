import { IDataGridColDef, DataGridFilterTypeString } from "../models";
import {
  ICellRendererProps,
  TextCellRenderer,
} from "./renderers/TextCell/TextCellRenderer";
import { ITooltipParams } from "ag-grid-community";

export function getTextColumn(
  title: string | JSX.Element,
  field: string,
  width?: number,
  sortable?: boolean,
  maxWidth?: number
): IDataGridColDef {
  return {
    field,
    sortable,
    headerName: title as string,
    width: width,
    maxWidth,
    cellRendererFramework: TextCellRenderer,
    valueGetter: (params) => {
      return params.data
        ? ({
            text: params.data[field] ?? "",
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
