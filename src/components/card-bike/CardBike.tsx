import { FC } from "react"

import { ICardBikeComponent } from "../../interfaces/cardBikeComponent"

import { BikeCard, BikeContentCard, BikeImgCard, BikeTitleCard } from "./Styles"


export const CardBikeComponent: FC<ICardBikeComponent> = ({ bike }: ICardBikeComponent) => {
  return (
    <BikeCard>

      {bike.large_img 
        ?<BikeImgCard src={bike.large_img} alt="" />
        :<BikeImgCard src='https://programacion.net/files/article/20151126051116_image-not-found.png' alt="" />
      }
      
      <BikeContentCard>
        <BikeTitleCard>{bike.title}</BikeTitleCard>

        <p>
          <strong>serial</strong>: {bike.serial}
        </p>
        <p>
          < strong>Stolen</strong>: {bike.stolen_location}
        </p>
        <p>
          <strong>Primary colors</strong>: 35435435
        </p>
        <p>
          <strong>Location</strong>: {bike.stolen_location}
        </p>

      </BikeContentCard>

    </BikeCard>
  )
};
