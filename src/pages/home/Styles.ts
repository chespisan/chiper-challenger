import styled from "styled-components";
import { IListBikes } from "../../interfaces/listBike";


export const HomeContainer = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0.5rem;
`;

export const HeaderHome = styled.header `
  font-size: 12px;
  padding: 1rem;
  text-align: center;
`;


export const FilterContainer = styled.div `
  display: flex;
  gap: 1rem;
  margin: 2rem 0;
`;

export const ListBikes = styled.div<IListBikes> `
  display: grid;
  gap: 1rem;
  grid-template-columns: ${props => 
    props.size === 'sm' ? 'repeat(1, 1fr)' : 'repeat(2, 1fr)'
  };
`;

export const TotalBikes = styled.div `
  width: 100%;
`;

export const TextTotalBikes = styled.p `
  margin: 0.2rem;
  text-align: right;
`;