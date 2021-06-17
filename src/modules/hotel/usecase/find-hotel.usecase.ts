import { IUseCase } from '../../../core/domain/usecase.interface';
import { IHotelDatabaseRepo } from '../infrastructure/database/database.interface';

class FindHotel implements IUseCase<string> {
  async execute(slug: string, dependencies: { hotelDatabaseRepo: IHotelDatabaseRepo }) {
    const { hotelDatabaseRepo } = dependencies;
    return hotelDatabaseRepo.findPlaceToStayBySlug(slug);
  }
}

const findHotelUseCase = new FindHotel();

export { findHotelUseCase };
