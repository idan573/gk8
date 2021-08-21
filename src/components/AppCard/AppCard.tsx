import React, { PropsWithChildren } from 'react';
import { CardContent } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import './AppCard.scss';
import CardHeader from '@material-ui/core/CardHeader';
import { IconType } from 'react-icons';
import { AppIcon } from '../AppIcon/AppIcon';

export interface IAppCardProps {
  className?: string;
  contentClassName?: string;
  fullWidth?: boolean;
  title?: string;
  inlineTitle?: boolean;
  icon?: string | IconType;
  iconClassName?: string;
}

export function AppCard(props: PropsWithChildren<IAppCardProps>) {
  const {
    className = '',
    contentClassName = '',
    fullWidth = false,
    children,
    title,
    icon,
    inlineTitle = true,
    iconClassName,
  } = props;

  const getTitle = () => {
    return (
      <span className={`card-title`}>
        {icon && (
          <AppIcon icon={icon} className={`icon ${iconClassName || ''}`} />
        )}
        {title && <span className={'text'}>{title}</span>}
      </span>
    );
  };

  return (
    <Card
      className={`app-card ${className} ${
        fullWidth ? 'full-width' : 'fit-content'
      } ${inlineTitle ? 'inline-title' : ''}`}
    >
      <CardHeader title={getTitle()} />
      <CardContent className={`app-card-content ${contentClassName}`}>
        {children}
      </CardContent>
    </Card>
  );
}
