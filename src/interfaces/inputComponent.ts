import { HTMLInputTypeAttribute } from "react";

export interface IInput {
  name: string;
  value: string;
  change: any;
  type: HTMLInputTypeAttribute;
  placeholder?: string;
  dataId?: string;
}