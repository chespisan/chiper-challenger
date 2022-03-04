/* eslint-disable testing-library/render-result-naming-convention */
import { render } from "@testing-library/react"
import { IBike } from "../../interfaces/getBikeResponse"
import { CardBikeComponent } from "./CardBike"

describe('Test Card Bike component', () => {

  const bikeDefault: IBike = {
    id: 1,
    stolen_location: 'string',
    serial: 'string',
    title: 'string',
    large_img: 'string',
    description: 'string',
    date_stolen: 1,
    thumb: 'string',
  }

  const bikeEmptyLargeImg: IBike = {
    ...bikeDefault,
    large_img: ''
  }

  const bikeEmptyAllImg: IBike = {
    ...bikeEmptyLargeImg,
    thumb: ''
  }

  const bikeEmptyData: IBike = {
    ...bikeDefault,
    serial: '',
    stolen_location: '',
    description: '',
    date_stolen: 0
  }

  test('testing render card Bike', () => {
    const cardBike = render(<CardBikeComponent bike={bikeDefault}/>)
    expect(cardBike).not.toBeUndefined()
  })

  test('testing render card Bike Empty LargeImg', () => {
    const cardBike = render(<CardBikeComponent bike={bikeEmptyLargeImg}/>)
    expect(cardBike).not.toBeUndefined()
  })

  test('testing render card Bike bike Empty All Img', () => {
    const cardBike = render(<CardBikeComponent bike={bikeEmptyAllImg}/>)
    expect(cardBike).not.toBeUndefined()
  })

  test('testing render card Bike bike Empty All data', () => {
    const cardBike = render(<CardBikeComponent bike={bikeEmptyData}/>)
    expect(cardBike).not.toBeUndefined()
  })

})