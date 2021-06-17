import mongoose from 'mongoose';
import { PlaceToStayDTO } from '../../dto/place-to-stay.dto';
import { PlacesToStayModel, placesToStaySchema } from '../../domain/place-to-stay.entity';
import { IHotelDatabaseRepo } from './database.interface';
import SlugNotFound from './errors/slug-not-found.error';

export class HotelDatabaseRepo implements IHotelDatabaseRepo {
  async save(placeToStay: PlaceToStayDTO): Promise<void> {
    const placeToStayDoc = new PlacesToStayModel({
      ...placeToStay
    });
    await placeToStayDoc.save();
  }

  async findPlaceToStayBySlug(inputSlug: string): Promise<PlaceToStayDTO> {
    const PlacesToStay = mongoose.model('PlacesToStay', placesToStaySchema);
    const placeToStay = await PlacesToStay.findOne({ slug: inputSlug });
    if (placeToStay) {
      const { id, slug, title, description, address, starRating, category } = placeToStay as unknown as PlaceToStayDTO;
      return {
        id,
        slug,
        title,
        description,
        address,
        starRating,
        category
      };
    }
    throw new SlugNotFound(inputSlug);
  }
}

export const hotelDatabaseRepo = new HotelDatabaseRepo();
