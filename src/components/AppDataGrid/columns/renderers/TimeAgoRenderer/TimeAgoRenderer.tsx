import moment from "moment";
import * as React from "react";

import { ICellRendererParamsStrong } from "../../../cell-renderers/common";

import "./TimeAgoRenderer.scss";

export interface ICellRendererProps {
  timestamp: number;
  className?: string;
}

export class TimeAgoRenderer extends React.Component<
  ICellRendererParamsStrong<ICellRendererProps>
> {
  constructor(props: ICellRendererParamsStrong<ICellRendererProps>) {
    super(props);
  }

  public render() {
    if (!this.props.value) {
      return <React.Fragment></React.Fragment>;
    }
    const { className = "", timestamp } = this.props?.value;

    const formatted = moment(timestamp).fromNow();

    return (
      <div className={`app-cell-renderer-time-ago ${className}`}>
        {formatted}
      </div>
    );
  }
}
