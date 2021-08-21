import { IDataGridColDef, IDataGridOptions } from "./models";
import { ColumnApi, GridApi, GridReadyEvent } from "ag-grid-community";
import { AgGridReact } from "ag-grid-react";
import React, { Component } from "react";
import "./AppDataGrid.scss";

interface IAppDataGridProps {
  colDefs: IDataGridColDef[];
  gridOptions: IDataGridOptions;
  className?: string;
  dataRows: any[];
}

interface IAppDataGridState {
  gridOptions: IDataGridOptions;
  gridApi?: GridApi;
  gridColsApi?: ColumnApi;
}

export class AppDataGrid extends Component<
  IAppDataGridProps,
  IAppDataGridState
> {
  constructor(props: IAppDataGridProps) {
    super(props);

    const { gridOptions } = props;

    this.state = {
      gridOptions,
    };

    this.handleResize = this.handleResize.bind(this);
  }

  public componentDidMount(): void {
    window.addEventListener("resize", this.handleResize);
  }

  public componentWillUnmount(): void {
    window.removeEventListener("resize", this.handleResize);
  }

  public render() {
    const { className, colDefs, dataRows } = this.props;
    const { gridOptions } = this.state;

    return (
      <div className={`app-data-grid ag-theme-material ${className || ""}`}>
        <AgGridReact
          gridOptions={gridOptions}
          columnDefs={colDefs as any}
          rowData={dataRows}
          onGridReady={this.handleGridReady}
        />
      </div>
    );
  }

  private readonly handleGridReady = (event: GridReadyEvent) => {
    this.setState({
      gridApi: event.api,
      gridColsApi: event.columnApi,
    });

    this.handleResize();
  };

  private handleResize() {
    const { gridApi } = this.state;

    if (gridApi) {
      //@ts-ignore
      this?.state?.gridApi.sizeColumnsToFit();
    }
  }
}
