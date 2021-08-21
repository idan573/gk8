import { TextField } from "@material-ui/core";
import React from "react";
import "./AppInput.scss";
import { nullHandler } from "../../utils/comm-utils";

export type AppInputType = "text" | "number" | "password";

export interface IAppInputProps<T> {
  id?: string;
  label: string;
  className?: string;
  value?: string | number;
  type?: AppInputType;
  onChange: (value: T) => void;
  onClick?: () => void;
  disabled?: boolean;
  placeHolder?: string;
}

const DIGITS_ONLY_REGEX = new RegExp(/^[0-9]*$/);

export function AppInput<T = string>(props: IAppInputProps<T>) {
  const {
    id,
    value,
    className = "",
    label,
    onChange,
    type = "text",
    onClick = nullHandler,
    disabled = false,
    placeHolder = "",
  } = props;

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value as unknown as T);
  };

  const handleOnClick = () => {
    onClick();
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (type === "number" && !DIGITS_ONLY_REGEX.test(event.key)) {
      event.preventDefault();
    }
  };

  return (
    <TextField
      id={id}
      type={type}
      value={value}
      label={label}
      margin="none"
      onChange={handleOnChange}
      className={`app-input type-${type} ${className} ${
        disabled ? "disabled" : "enabled"
      }`}
      onClick={handleOnClick}
      onKeyPress={handleKeyPress}
      disabled={disabled}
      placeholder={placeHolder}
    />
  );
}
