/* eslint-disable react-hooks/exhaustive-deps */
import { FC, useEffect, useState } from "react";

import { CardBikeComponent } from "../../components/card-bike/CardBike";

import { IBike } from "../../interfaces/getBikeResponse";
import { IGetBikeStolen } from "../../interfaces/getBikeStolen";

import { BikesServices } from "../../services/bikeServices"

import { HeaderHome, HomeContainer, ListBikes, TextTotalBikes } from "./Styles";


export const Home: FC = () => {
  const [ listBikes, setListBikes ] = useState<any>([]);
  const [ bikesCount, setBikesCount ] = useState<number | undefined>(0);
  const bikesService: BikesServices = new BikesServices();

  const handleGetBikes = async (): Promise<void> => {
    try {
      const paramsData: IGetBikeStolen = {
        page: 1,
        distance: 10,
        perPage: 10,
        stolenness: 'stolen'
      }
      const data = await bikesService.getBikesStolen(paramsData);
      console.log('listBike: ', data?.bikes);
      setListBikes(data?.bikes)
    } catch (error) { 
    }
  }

  const handleGetBikesCount = async (): Promise<void> => {
    try {
      const data = await bikesService.getAllBikesCount();
      console.log('count stolen: ', data?.stolen);
      setBikesCount(data?.stolen);
    } catch (error) { 
    }
  }

  useEffect(() => {
    handleGetBikes();
    handleGetBikesCount();
  }, []);

  return (
    <HomeContainer>
      
      <HeaderHome >
        <h1>Police Departament of Berlin</h1>
      </HeaderHome>

      <TextTotalBikes>Total: {bikesCount}</TextTotalBikes>

      <ListBikes>
        {listBikes.map((bike: IBike) => (
          <CardBikeComponent key={bike.id} bike={bike} />
        ))}
      </ListBikes>

      

    </HomeContainer>
  )
}
