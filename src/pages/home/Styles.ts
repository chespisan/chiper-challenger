import styled from "styled-components";
import { colorTertiary } from "../../styles/style.global";


export const HomeContainer = styled.div `
  display: flex;
  flex-direction: column;
  margin: 0.5rem;
`;

export const HeaderHome = styled.header `
  font-size: 12px;
  padding: 1rem;
  text-align: center;
`;

export const ListBikes = styled.div `
  display: grid;
  gap: 1rem;
`;

export const TextTotalBikes = styled.p `
  margin: 0.2rem;
  text-align: right;
`;