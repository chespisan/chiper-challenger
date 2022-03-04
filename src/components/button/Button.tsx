import { FC } from 'react'

import { IButton } from '../../interfaces/buttonComponent'
import { ButtonStyleComponent } from './Style'

export const ButtonComponent: FC<IButton> = ({
  text,
  click,
  disabled,
  dataId,
}: IButton) => {
  return (
    <ButtonStyleComponent
      data-testid={dataId}
      disabled={disabled}
      onClick={click}
    >
      {text}
    </ButtonStyleComponent>
  )
}
