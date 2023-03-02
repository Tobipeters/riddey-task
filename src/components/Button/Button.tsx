import * as React from "react";
import { buttonStyle } from "./button.css";

interface IButtonProps {
  text: string;
  isDisabled?: boolean;
  click?: () => any;
}

export const Button: React.FC<IButtonProps> = ({
  text,
  click,
  isDisabled = false,
}) => {
  return (
    <button onClick={click} className={buttonStyle} disabled={isDisabled}>
      {text}
    </button>
  );
};
