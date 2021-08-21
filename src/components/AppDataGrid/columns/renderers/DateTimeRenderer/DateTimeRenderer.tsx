import moment from "moment";
import * as React from "react";
import { DEFAULT_TIMESTAMP_FORMAT } from "../../../../../utils/DateFormats";

import { ICellRendererParamsStrong } from "../../../../AppDataGrid/cell-renderers/common";

import "./DateTimeRenderer.scss";

export interface ICellRendererProps {
  timestamp: number;
  className?: string;
  format?: string;
  localTime?: boolean;
}

export class DateTimeRenderer extends React.Component<
  ICellRendererParamsStrong<ICellRendererProps>
> {
  constructor(props: ICellRendererParamsStrong<ICellRendererProps>) {
    super(props);
  }

  public render() {
    if (!this.props.value) {
      return <React.Fragment></React.Fragment>;
    }
    const {
      format = DEFAULT_TIMESTAMP_FORMAT,
      className = "",
      timestamp,
      localTime = false,
    } = this.props?.value;

    const formatted = timestamp
      ? localTime
        ? moment.utc(timestamp).local().format(format)
        : moment.utc(timestamp).format(format)
      : "N/A";

    return (
      <div className={`app-cell-renderer-date-time ${className}`}>
        {formatted}
      </div>
    );
  }
}
