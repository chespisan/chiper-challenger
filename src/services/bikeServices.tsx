import Axios from 'axios';
import { IGetBikeCountResponse } from '../interfaces/getBikeCountResponse';
import { IGetBikeResponse } from '../interfaces/getBikeResponse';
import { IGetBikeStolen } from '../interfaces/getBikeStolen';


const { REACT_APP_URL_BIKES } = process.env;


export class BikesServices {

  private apiUrl: string | undefined;

  constructor() {
    this.apiUrl = REACT_APP_URL_BIKES;
  }

  async getBikesStolen({ page, perPage, distance, stolenness }: IGetBikeStolen): Promise<IGetBikeResponse> {
    const request = {
      params: {
        page,
        per_page: perPage,
        distance,
        stolenness
      }
    }
    const { data } = await Axios.get(`${this.apiUrl}`, request)
    return data;
  }

  async getAllBikesCount(): Promise<IGetBikeCountResponse> {
    const { data } = await Axios.get(`${this.apiUrl}/count`)
    return data;
  }

}