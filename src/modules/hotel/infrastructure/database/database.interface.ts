import { IRepo } from '../../../../core/infrastructure/repo.interface';
import { PlaceToStayDTO } from '../../dto/place-to-stay.dto';

export interface IHotelDatabaseRepo extends IRepo<PlaceToStayDTO> {
  findPlaceToStayBySlug(slug: string): Promise<PlaceToStayDTO>;
}
