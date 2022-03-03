
export interface IBike {
  id: number;
  stolen_location: string;
  serial: string;
  title: string;
  frame_colors: string[];
  large_img: string;
}

export interface IGetBikeResponse {
  bikes: IBike[];
}