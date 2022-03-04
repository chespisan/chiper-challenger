import { FC, useRef } from 'react'
import { IInput } from '../../interfaces/inputComponent'
import { InputStyle } from './Styles'

export const InputComponent: FC<IInput> = ({
  name,
  value,
  change,
  type,
  placeholder,
  dataId,
}: IInput) => {
  const inputRef = useRef<any>(null)

  const handleInputValue = (): void => change(inputRef.current.value)

  return (
    <InputStyle
      data-testid={dataId}
      ref={inputRef}
      name={name}
      value={value}
      onChange={handleInputValue}
      type={type}
      placeholder={placeholder}
      autoComplete="off"
    />
  )
}
