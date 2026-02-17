import type { ProductCardDto } from "~/models/ProductCard";

export interface BannerDto {
  creationDate: Date;
  link: string;
  imageName: string;
  position: BannerPosition;
}
export enum BannerPosition {
  SliderBelove = 0,
  SliderLeft = 1,
  SliderTop = 2,
  WonderfullRight = 3,
  PageMiddle = 4,
}

export interface SliderDto {
  creationDate: Date;
  title: string;
  link: string;
  imageName: string;
}
export interface HomeDataDto {
  banners: BannerDto[];
  sliders: SliderDto[];
  latestProduct: ProductCardDto[];
  amazingProducts: ProductCardDto[];
}