import { PlaceToStayDTO } from '../dto/place-to-stay.dto';
import { RawPlaceToStayDTO } from '../dto/raw-place-to-stay.dto';

export const replaceChars = (string: string): string => {
  return string
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/&/g, '-and-') // Replace & with ‘and’
    .replace(/[^\w-]+/g, '') // Remove all non-word characters such as spaces or tabs
    .replace(/--+/g, '-') // Replace multiple — with single -
    .replace(/^-+/, '') // Trim — from start of text
    .replace(/-+$/, ''); // Trim — from end of text
};

export const appendSlug = (placesToStay: RawPlaceToStayDTO[]): PlaceToStayDTO[] => {
  return placesToStay.map((placeToStay, index) => {
    const slug = `${replaceChars(placeToStay.category)}-${replaceChars(placeToStay.title)}`;
    return {
      id: index,
      slug,
      ...placeToStay
    };
  });
};
