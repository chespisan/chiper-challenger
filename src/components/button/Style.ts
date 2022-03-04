import styled from "styled-components";
import { IButtonStyle } from "../../interfaces/buttonStyle";
import { borderRadiusSM, colorPrimary, colorQuartiary, colorTertiary, paddingSM } from "../../styles/variables";


export const ButtonStyleComponent = styled.button<IButtonStyle> `
  background-color: ${ props => props.disabled ? colorQuartiary : colorPrimary};
  border: none;
  border-radius: ${borderRadiusSM};
  color: ${colorTertiary};
  cursor: pointer;
  padding: ${paddingSM};
`;