import styled, { keyframes } from "styled-components";
import { colorDanger, colorPrimary, colorSecondary, colorTertiary } from "../../styles/style.global";

export const BikeCard = styled.div `
  background-color: ${colorTertiary};
  border: solid thin #e9e9e9;
  border-radius: 1rem;
  display: flex;
  gap: 1rem;
  padding: 1rem;
`;

export const BikeImgCard = styled.img `
  object-fit: cover;
  border-radius: 1rem;
  height: 100px;
  width: 100px;
`;

export const BikeContentCard = styled.div `
  /* display: grid;
  gap: 0.5rem; */
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
  font-size: 18px;
  text-align: center;
`;

export const TextError = styled.p `
  color: ${colorDanger};
  font-size: 18px;
  text-align: center;
`;