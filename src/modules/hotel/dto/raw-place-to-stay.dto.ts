import { IsInt, IsNotEmpty } from 'class-validator';

export enum PlaceToStayCategory {
  HOTEL = 'Hotel',
  VILLA = 'Villa',
  RESORT = 'Resort',
  BED_AND_BREAKFAST = 'BedAndBreakfast',
  GUESTHOUSE = 'Guesthouse'
}

export class RawPlaceToStayDTO {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  address: string;

  country?: string;

  @IsInt()
  starRating?: number;

  category: PlaceToStayCategory;
}
