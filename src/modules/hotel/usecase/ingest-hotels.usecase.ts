import { IUseCase } from '../../../core/domain/usecase.interface';
import { PlaceToStayDTO } from '../dto/place-to-stay.dto';
import { IHotelDatabaseRepo } from '../infrastructure/database/database.interface';

class IngestHotels implements IUseCase<PlaceToStayDTO[]> {
  async execute(placesToStay: PlaceToStayDTO[], dependencies: { hotelDatabaseRepo: IHotelDatabaseRepo }) {
    const { hotelDatabaseRepo } = dependencies;
    await Promise.all(
      placesToStay.map(async (placeToStay) => {
        await hotelDatabaseRepo.save(placeToStay);
      })
    );
  }
}

const ingestHotelsUseCase = new IngestHotels();

export { ingestHotelsUseCase };
