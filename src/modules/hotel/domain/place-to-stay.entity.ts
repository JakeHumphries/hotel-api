import { Schema, model } from 'mongoose';
import { PlaceToStayDTO } from '../dto/place-to-stay.dto';
import { PlaceToStayCategory } from '../dto/raw-place-to-stay.dto';

export const placesToStaySchema = new Schema<PlaceToStayDTO>({
  id: { type: String, required: true },
  slug: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  address: { type: String, required: true },
  country: { type: String, required: false },
  starRating: { type: Number, required: false },
  category: { type: PlaceToStayCategory, required: true }
});

export const PlacesToStayModel = model<PlaceToStayDTO>('PlacesToStay', placesToStaySchema);
