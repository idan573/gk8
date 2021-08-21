import { IDataGridColDef } from "../../AppDataGrid/models";
import {
  ICellRendererProps,
  TextCellRenderer,
} from "./renderers/TextCell/TextCellRenderer";

export function getActions(
  title: string,
  field: string,
  width?: number,
  sortable?: boolean,
  getFilterFromServer?: (params: any) => void
): IDataGridColDef {
  return {
    field,
    sortable,
    headerName: title as string,
    width,
    cellRendererFramework: TextCellRenderer,
    filter: "agSetColumnFilter",
    filterParams: {
      filterOptions: ["equals"],
      values: (params: any) => {
        if (!getFilterFromServer) {
          params.success([]);
          return;
        }

        getFilterFromServer(params);
      },
    },
    valueGetter: (params: any) => {
      return params.data
        ? ({
            text: params.data[field],
          } as ICellRendererProps)
        : undefined;
    },
    comparator: (
      valueA: any,
      valueB: any,
      nodeA: any,
      nodeB: any,
      isInverted: boolean
    ) => {
      if (valueA?.text > valueB?.text) {
        return -1;
      } else if (valueA?.text < valueB?.text) {
        return 1;
      } else {
        return 0;
      }
    },
  };
}
