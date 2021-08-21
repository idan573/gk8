import React from 'react';
import './AppSpinner.scss';
import CircularProgress from '@material-ui/core/CircularProgress';

export enum SpinnerSize {
  TINY = 14,
  SMALL = 20,
  MEDIUM = 30,
  LARGE = 40,
}

export interface IAppIconProps {
  title?: string;
  size?: SpinnerSize | number;
  className?: string;
  flashTitle?: boolean;
}

export function AppSpinner(props: IAppIconProps) {
  const { className, size, title, flashTitle = true } = props;

  return (
    <span className={`app-spinner ${className}`}>
      {title && (
        <span
          className={`app-spinner-title ${
            flashTitle ? 'animation-flashing' : ''
          }`}
        >
          {title}
        </span>
      )}
      {size && <CircularProgress variant="indeterminate" size={size} />}
    </span>
  );
}
