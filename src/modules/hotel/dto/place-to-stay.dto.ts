import { IsNotEmpty } from 'class-validator';
import { RawPlaceToStayDTO } from './raw-place-to-stay.dto';

export class PlaceToStayDTO extends RawPlaceToStayDTO {
  @IsNotEmpty()
  id: number;

  @IsNotEmpty()
  slug: string;
}
