import React from "react";
import "./TxGrid.scss";
import { AgGridColumn, AgGridReact } from "ag-grid-react";

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import { gridOptions } from "./models";
import { TransactionDataSource } from "./txDataSource";
export interface TxGridProps {
  address: string;
}

export const TxGrid: React.FC<TxGridProps> = ({ address }: TxGridProps) => {
  const [gridApi, setGridApi] = React.useState(null);

  const onGridReady = (params: any) => {
    setGridApi(params.api);

    const updateData = () => {
      params.api.setServerSideDatasource(new TransactionDataSource(address));
    };

    updateData();
  };

  return (
    <div className="input-form ">
      {!!address && (
        <div className="ag-theme-alpine tx-grid">
          <AgGridReact
            gridOptions={gridOptions}
            rowModelType={"serverSide"}
            pagination={true}
            paginationAutoPageSize={true}
            suppressAggFuncInHeader={true}
            onGridReady={onGridReady}
          >
            <AgGridColumn field="from"></AgGridColumn>
            <AgGridColumn field="to"></AgGridColumn>
            <AgGridColumn field="value"></AgGridColumn>
            <AgGridColumn field="confirmations"></AgGridColumn>
            <AgGridColumn field="hash"></AgGridColumn>
            <AgGridColumn field="date"></AgGridColumn>
          </AgGridReact>
        </div>
      )}
    </div>
  );
};
