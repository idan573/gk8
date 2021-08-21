import Button from '@material-ui/core/Button';
import React, { PropsWithChildren } from 'react';

import './AppButton.scss';
import { AppIcon } from '../AppIcon/AppIcon';
import { AppSpinner, SpinnerSize } from '../AppSpinner/AppSpinner';

export interface IAppButtonProps {
  label?: string;
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
  icon?: string;
  iconClass?: string;
  iconLocation?: 'left' | 'right';
  color?: 'default' | 'primary' | 'secondary';
  variant?: 'text' | 'outlined' | 'contained';
  size?: 'large' | 'medium' | 'small';
  spinner?: boolean;
}

export function AppButton(props: PropsWithChildren<IAppButtonProps>) {
  function handleButtonClicked() {
    if (props.onClick) {
      props.onClick();
    }
  }

  const {
    label,
    color,
    className,
    variant,
    disabled,
    icon,
    spinner,
    iconClass,
    children,
    iconLocation = 'left',
    size = 'medium',
  } = props;

  return (
    <Button
      size={size}
      className={`app-button icon-${iconLocation} ${className || ''}`}
      disabled={disabled}
      color={color || 'default'}
      variant={variant || 'contained'}
      onClick={handleButtonClicked}
    >
      {icon && iconLocation === 'left' && (
        <AppIcon icon={icon} className={`app-button-icon ${iconClass}`} />
      )}
      {children}
      {label}
      {icon && iconLocation === 'right' && (
        <AppIcon icon={icon} className={`app-button-icon ${iconClass}`} />
      )}
      {spinner && (
        <AppSpinner size={SpinnerSize.TINY} className={'button-spinner'} />
      )}
    </Button>
  );
}
