import Icon from '@material-ui/core/Icon';
import React from 'react';
import './AppIcon.scss';
import { IconType } from 'react-icons';

/**
 * Use any of the following: https://github.com/react-icons/react-icons
 */

export interface IAppIconProps {
  icon: string | IconType;
  className?: string;
}

export function AppIcon(props: IAppIconProps) {
  const { className = '', icon: SomeIcon } = props;

  if (typeof SomeIcon === 'string') {
    return <Icon className={`app-icon ${className}`}>{SomeIcon}</Icon>;
  } else {
    return (
      <div className={`app-icon ${className}`}>
        <SomeIcon />
      </div>
    );
  }
}
