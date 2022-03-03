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

  async getBikesStolen({ page, perPage, distance, stolenness }: IGetBikeStolen): Promise<IGetBikeResponse | undefined> {
    const request = {
      params: {
        page,
        per_page: perPage,
        distance,
        stolenness
      }
    }
    try {
      const { data } = await Axios.get(`${this.apiUrl}`, request)
      return data;
    } catch (error) {
      console.log('error: ', error);
    }
  }

  async getAllBikesCount(): Promise<IGetBikeCountResponse | undefined> {
    try {
      const { data } = await Axios.get(`${this.apiUrl}/count`)
      return data;
    } catch (error) {
      console.log('error: ', error);
    }
  }

}