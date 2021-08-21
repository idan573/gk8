import React from "react";
import "components/AppDataGrid/cell-renderers/CellRendererLoading/LoadingCellRenderer.scss";
import { AppSpinner, SpinnerSize } from "../../../AppSpinner/AppSpinner";

export interface LoadingCellRendererProps {
  loadingMessage: string;
}
export const LoadingCellRenderer: React.FunctionComponent<LoadingCellRendererProps> =
  (props: LoadingCellRendererProps) => {
    return (
      <div className="loading-container">
        <AppSpinner size={SpinnerSize.SMALL} />
        <div className="loading-text">{props?.loadingMessage}</div>
      </div>
    );
  };
