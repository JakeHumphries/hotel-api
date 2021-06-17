import { Request, Response, NextFunction } from 'express';
import { ingestHotelsUseCase } from '../usecase/ingest-hotels.usecase';
import placesToStay from '../../../../resources/places-to-stay.json';
import { hotelDatabaseRepo } from './database/database.repository';
import { appendSlug } from '../util/append-slug';
import { RawPlaceToStayDTO } from '../dto/raw-place-to-stay.dto';
import { findHotelUseCase } from '../usecase/find-hotel.usecase';

class HotelController {
  async ingestHotels(req: Request, res: Response, next: NextFunction) {
    try {
      const sluggedPlacesToStay = appendSlug(placesToStay as RawPlaceToStayDTO[]);
      await ingestHotelsUseCase.execute(sluggedPlacesToStay, { hotelDatabaseRepo });
      res.send('Hotels Ingested Successfully');
    } catch (err) {
      next(err);
    }
  }

  async findHotel(req: Request, res: Response, next: NextFunction) {
    try {
      const placeToStay = await findHotelUseCase.execute(req.params.slug, { hotelDatabaseRepo });
      res.send(placeToStay);
    } catch (err) {
      next(err);
    }
  }
}

const hotelController = new HotelController();

export { hotelController };
