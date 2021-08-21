import * as React from "react";
import { ICellRendererParamsStrong } from "../../../../AppDataGrid/cell-renderers/common";
import "./TextCellRenderer.scss";

export interface ICellRendererProps {
  text: string;
  className?: string;
}

export class TextCellRenderer extends React.Component<
  ICellRendererParamsStrong<ICellRendererProps>
> {
  constructor(props: ICellRendererParamsStrong<ICellRendererProps>) {
    super(props);
  }

  public render() {
    if (!this.props.value) {
      return <React.Fragment></React.Fragment>;
    }
    const { className = "", text } = this.props.value;

    return <div className={`app-cell-renderer-text ${className}`}>{text}</div>;
  }
}
