/* eslint-disable react-hooks/exhaustive-deps */
import { FC, useCallback, useEffect, useState } from 'react'
import Pagination from 'react-js-pagination'
import debounce from 'lodash.debounce'

import { ButtonComponent } from '../../components/button/Button'
import { CardBikeComponent } from '../../components/card-bike/CardBike'
import {
  ListEmpty,
  Spinner,
  TextError,
} from '../../components/card-bike/Styles'
import { InputComponent } from '../../components/input/Input'

import { IBike } from '../../interfaces/getBikeResponse'
import { IGetBikeStolen } from '../../interfaces/getBikeStolen'

import { BikesServices } from '../../services/bikeServices'

import {
  FilterContainer,
  HeaderHome,
  HomeContainer,
  ListBikes,
  TextTotalBikes,
  TotalBikes,
} from './Styles'

export const Home: FC = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  const [activePage, setActivePage] = useState(1)
  const [listBikes, setListBikes] = useState<IBike[]>([])
  const [bikesCount, setBikesCount] = useState<number>(0)
  const [inputValue, setInputValue] = useState('')
  const bikesService: BikesServices = new BikesServices()

  const handleGetBikes = async (paramsData: IGetBikeStolen): Promise<void> => {
    setIsLoading(true)
    try {
      const data = await bikesService.getBikesStolen(paramsData)
      if (data && data.bikes && data.bikes.length > 0) {
        setListBikes(data.bikes)
        setIsLoading(false)
        return
      }
      setListBikes([])
      setIsLoading(false)
    } catch (error) {
      setIsLoading(false)
      setIsError(true)
    }
  }

  const handleGetBikesCount = async (): Promise<void> => {
    try {
      const data = await bikesService.getAllBikesCount()
      if (data && data.stolen) setBikesCount(data.stolen)
    } catch (error) {}
  }

  const handlePageChange = (pageNumber: number): void => {
    handleGetBikes({
      page: pageNumber,
      per_page: 10,
      distance: 10,
      stolenness: 'stolen',
    })
    setActivePage(pageNumber)
  }

  const handleSearchAction = (newValue: string): void => {
    setActivePage(1)
    handleGetBikes({
      query: newValue,
      page: 1,
      per_page: 10,
      distance: 10,
      stolenness: 'stolen',
    })
  }

  const handleCleanFilters = (): void => {
    setInputValue('')
    setActivePage(1)
    handleGetBikes({
      page: 1,
      per_page: 10,
      distance: 10,
      stolenness: 'stolen',
    })
  }

  const debounceSave = useCallback(
    debounce((newValue) => handleSearchAction(newValue), 1000),
    [],
  )

  const handleValueInput = (valueInput: string): void => {
    setInputValue(valueInput)
    debounceSave(valueInput)
  }

  useEffect(() => {
    handleGetBikes({
      page: 1,
      per_page: 10,
      distance: 10,
      stolenness: 'stolen',
    })
    handleGetBikesCount()
  }, [])

  return (
    <HomeContainer data-testid="home">
      <HeaderHome>
        <h2>Police Departament of Berlin</h2>
      </HeaderHome>

      <FilterContainer>
        <InputComponent
          dataId="input-search"
          name="search"
          type="text"
          value={inputValue}
          change={handleValueInput}
          placeholder="Buscar...."
        />
        <ButtonComponent
          dataId="action-clean-filter"
          text="Clean"
          click={handleCleanFilters}
          disabled={false}
        />
      </FilterContainer>

      {isLoading ? (
        <Spinner></Spinner>
      ) : isError ? (
        <TextError>
          Ups, ha ocurrido un error.
          <br />
          Intente de nuevo.
        </TextError>
      ) : listBikes.length < 1 ? (
        <ListEmpty>No se ha encontrado resultados</ListEmpty>
      ) : (
        <>
          <TotalBikes>
            <TextTotalBikes>Total: {bikesCount}</TextTotalBikes>
          </TotalBikes>

          <ListBikes>
            {listBikes?.map((bike: IBike) => (
              <CardBikeComponent key={bike.id} bike={bike} />
            ))}
          </ListBikes>

          <Pagination
            data-testid="paginator"
            activePage={activePage}
            itemsCountPerPage={10}
            totalItemsCount={bikesCount}
            pageRangeDisplayed={6}
            onChange={handlePageChange}
          />
        </>
      )}
    </HomeContainer>
  )
}
