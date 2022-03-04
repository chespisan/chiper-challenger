/* eslint-disable react-hooks/exhaustive-deps */
import { FC, useEffect, useState } from "react";
import Pagination from "react-js-pagination";

import { CardBikeComponent } from "../../components/card-bike/CardBike";
import { ListEmpty, Spinner, TextError } from "../../components/card-bike/Styles";

import { IBike } from "../../interfaces/getBikeResponse";
import { IGetBikeStolen } from "../../interfaces/getBikeStolen";
import { BikesServices } from "../../services/bikeServices"

import { HeaderHome, HomeContainer, ListBikes, TextTotalBikes, TotalBikes } from "./Styles";


export const Home: FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [activePage, setActivePage] = useState(1)
  const [listBikes, setListBikes] = useState<IBike[]>([]);
  const [bikesCount, setBikesCount] = useState<number>(0);
  const bikesService: BikesServices = new BikesServices();

  const handleGetBikes = async (paramsData: IGetBikeStolen): Promise<void> => {
    try {
      const data = await bikesService.getBikesStolen(paramsData);
      if (data && data.bikes && data.bikes.length > 0) {
        setListBikes(data.bikes);
        setIsLoading(false);
      }
    } catch (error) {
      setIsLoading(false);
      setIsError(true);
    }
  }

  const handleGetBikesCount = async (): Promise<void> => {
    try {
      const data = await bikesService.getAllBikesCount();
      if (data && data.stolen) setBikesCount(data.stolen);
    } catch (error) {
    }
  }

  const handlePageChange = (pageNumber: number) => {
    handleGetBikes({ page: pageNumber, perPage: 10, distance: 10, stolenness: 'stolen' });
    setActivePage(pageNumber);
  }

  useEffect(() => {
    handleGetBikes({ page: 1, perPage: 10, distance: 10, stolenness: 'stolen' });
    handleGetBikesCount();
  }, []);

  return (
    <HomeContainer>

      <HeaderHome >
        <h2>Police Departament of Berlin</h2>
      </HeaderHome>

      {isLoading
        ? <Spinner></Spinner>
        :
        isError
          ? <TextError>
            Ups, ha ocurrido un error.
            <br />
            Intenta de nuevo.
          </TextError>
          :
          listBikes.length < 1
            ?
            <ListEmpty>No se ha encontrado resultados</ListEmpty>
            :
            <>
              <TotalBikes>
                <TextTotalBikes>Total: {bikesCount}</TextTotalBikes>
              </TotalBikes>

              <ListBikes size="sm">
                {listBikes?.map((bike: IBike) => (
                  <CardBikeComponent key={bike.id} bike={bike} />
                ))}
              </ListBikes>

              <Pagination
                activePage={activePage}
                itemsCountPerPage={10}
                totalItemsCount={bikesCount}
                pageRangeDisplayed={6}
                onChange={handlePageChange}
              />
            </>
      }


    </HomeContainer>
  )
}
