import styled from "styled-components";
import { colorPrimary, colorTertiary } from "../../styles/style.global";

export const BikeCard = styled.div `
  background-color: ${colorTertiary};
  border-radius: 1rem;
  display: flex;
  gap: 1rem;
  padding: 1rem;
`;

export const BikeImgCard = styled.img `
  width: 100px;
  height: 100px;
  border-radius: 1rem;
`;

export const BikeContentCard = styled.div `
  display: grid;
  gap: 0.5rem;
`;

export const BikeTitleCard = styled.h4 `
  color: ${colorPrimary};
`;