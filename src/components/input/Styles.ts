import styled from 'styled-components'
import {
  borderRadiusSM,
  colorQuintiary,
  paddingSM,
} from '../../styles/variables'

export const InputStyle = styled.input`
  border: solid thin ${colorQuintiary};
  border-radius: ${borderRadiusSM};
  padding: ${paddingSM};
  &:focus {
    outline: none;
  }
`
