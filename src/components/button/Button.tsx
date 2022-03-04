import { MouseEventHandler } from "react";
import { ButtonStyleComponent } from "./Style"

export interface IButton {
  text: string;
  click: MouseEventHandler<HTMLButtonElement>;
  disabled: boolean;
}

export const ButtonComponent = ({ text, click, disabled }: IButton) => {
  return (
   <ButtonStyleComponent 
    disabled={disabled}
    onClick={click}>
     {text}
    </ButtonStyleComponent> 
  )
}
