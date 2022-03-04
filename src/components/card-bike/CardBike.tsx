import { FC } from "react"

import { ICardBikeComponent } from "../../interfaces/cardBikeComponent"
import { formatDate } from "../../utils/formatDate";

import { BikeCard, BikeContentCard, BikeImgCard, BikeTitleCard } from "./Styles"


export const CardBikeComponent: FC<ICardBikeComponent> = ({ bike }: ICardBikeComponent) => {
  return (
    <BikeCard>

      {bike.large_img || bike.thumb
        ?<BikeImgCard src={bike.large_img || bike.thumb} alt="" />
        :<BikeImgCard src='https://programacion.net/files/article/20151126051116_image-not-found.png' alt="" />
      }
      
      <BikeContentCard>
        <BikeTitleCard>{bike.title}</BikeTitleCard>

        <p>
          <strong>Serial</strong>: {bike.serial ? bike.serial : 'N/A'}
        </p>
        <p>
          < strong>Description</strong>: {bike.description ? bike.description : 'N/A'}
        </p>
        <p>
          <strong>Date Stolen</strong>: {bike.date_stolen ? formatDate(bike.date_stolen): 'N/A'}
        </p>
        <p>
          <strong>Location</strong>: {bike.stolen_location ? bike.stolen_location : 'N/A'}
        </p>

      </BikeContentCard>

    </BikeCard>
  )
};
