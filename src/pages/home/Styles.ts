import styled from "styled-components";
import { IListBikes } from "../../interfaces/listBike";
import { fontSizeSM, marginLG, marginMD, marginSM, paddingMD } from "../../styles/variables";


export const HomeContainer = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: ${marginSM};
`;

export const HeaderHome = styled.header `
  font-size: ${fontSizeSM};
  padding: ${paddingMD};
  text-align: center;
`;


export const FilterContainer = styled.div `
  display: flex;
  gap: 1rem;
  margin: ${marginLG} 0;
`;

export const ListBikes = styled.div<IListBikes> `
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(1, 1fr);

  @media (min-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1440px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const TotalBikes = styled.div `
  width: 100%;
`;

export const TextTotalBikes = styled.p `
  margin: 0.2rem;
  text-align: right;
`;