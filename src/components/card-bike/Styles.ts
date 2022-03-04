import styled, { keyframes } from "styled-components";
import { borderRadiusMD, colorDanger, colorPrimary, colorQuintiary, colorSecondary, colorTertiary, fontSizeMD, paddingMD } from "../../styles/variables";

export const BikeCard = styled.div `
  align-items: center;
  background-color: ${colorTertiary};
  border: solid thin ${colorQuintiary};
  border-radius: ${borderRadiusMD};
  display: flex;
  gap: 1rem;
  padding: ${paddingMD};
`;

export const BikeImgCard = styled.img `
  object-fit: cover;
  border-radius: ${borderRadiusMD};
  height: 150px;
  width: 150px;
  @media (min-width: 768px) {
    width: 200px;
  }
`;

export const BikeContentCard = styled.div `
  display: grid;
`;

export const BikeTitleCard = styled.h4 `
  color: ${colorPrimary};
`;


const SpinnerAnimation = keyframes`
 0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

export const Spinner = styled.div `
  animation: ${SpinnerAnimation} 1s linear infinite;
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-left-color: #09f;
  border-radius: 50%;
  height: 56px;
  width: 56px;
`;

export const ListEmpty = styled.p `
  font-size: ${fontSizeMD};
  text-align: center;
`;

export const TextError = styled.p `
  color: ${colorDanger};
  font-size: ${fontSizeMD};
  text-align: center;
`;