import styled from "styled-components";
import { IButtonStyle } from "../../interfaces/buttonStyle";
import { colorPrimary, colorQuartiary, colorTertiary } from "../../styles/variables";


export const ButtonStyleComponent = styled.button<IButtonStyle> `
  background-color: ${ props => props.disabled ? colorQuartiary : colorPrimary};
  border: none;
  border-radius: 0.5rem;
  color: ${colorTertiary};
  cursor: pointer;
  padding: 0.5rem;
`;