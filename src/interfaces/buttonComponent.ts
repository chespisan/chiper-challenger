import { MouseEventHandler } from "react";

export interface IButton {
  text: string;
  click: MouseEventHandler<HTMLButtonElement>;
  disabled: boolean;
  dataId?: string;
}