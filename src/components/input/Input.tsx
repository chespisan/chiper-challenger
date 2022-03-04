import React, { ChangeEvent, FC, HTMLInputTypeAttribute, useRef } from "react";
import { IInput } from "../../interfaces/inputComponent";
import { InputStyle } from "./Styles"


export const InputComponent: FC<IInput> = ({ name, value, change, type, placeholder }: IInput) => {
  const inputRef = useRef<any>(null);

  const handleInputValue = (): void => change(inputRef.current.value);

  return (
    <InputStyle 
      ref={inputRef} 
      name={name}
      value={value}
      onChange={handleInputValue}
      type={type}
      placeholder={placeholder}
      autoComplete='off'
    />
  )
}
