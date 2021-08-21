import { IDataGridColDef } from "../../AppDataGrid/models";
import {
  TextCellRenderer,
  ICellRendererProps,
} from "./renderers/TextCell/TextCellRenderer";

export function getExpandedRowColumn(
  title: string | JSX.Element,
  field: string,
  width?: number,
  sortable?: boolean,
  minWidth: number = 180
): IDataGridColDef {
  return {
    field,
    sortable,
    headerName: title as string,
    width,
    minWidth,
    maxWidth: width,
    headerCheckboxSelection: true,
    headerCheckboxSelectionFilteredOnly: true,
    cellRenderer: "agGroupCellRenderer",
    cellRendererParams: {
      checkbox: true,
      innerRendererFramework: TextCellRenderer,
    },
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
