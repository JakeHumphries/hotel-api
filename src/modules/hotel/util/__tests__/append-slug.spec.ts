import { PlaceToStayCategory } from '../../dto/raw-place-to-stay.dto';
import { appendSlug, replaceChars } from '../append-slug';

describe('replace chars', () => {
  it('should return the correct string', () => {
    const result = replaceChars('A string! with %some Chars');
    expect(result).toBe('a-string-with-some-chars');
  });
});

describe('append slug', () => {
  it('should return the correct array given a placeToStay array', () => {
    const placesToStay = [
      {
        title: 'Omni Orlando Resort At Championsgate',
        description:
          "When you stay at Omni Orlando Resort at ChampionsGate in Four Corners, you'll be near the airport, within a 15-minute drive of Orlando Vineland Premium Outlets and ChampionsGate Golf Club.",
        address: '1500 Masters Blvd, 33896, Davenport, United States of America',
        starRating: 5,
        category: PlaceToStayCategory.RESORT
      }
    ];
    const result = appendSlug(placesToStay);
    const expectedResult = [
      {
        id: 0,
        slug: 'resort-omni-orlando-resort-at-championsgate',
        title: 'Omni Orlando Resort At Championsgate',
        description:
          "When you stay at Omni Orlando Resort at ChampionsGate in Four Corners, you'll be near the airport, within a 15-minute drive of Orlando Vineland Premium Outlets and ChampionsGate Golf Club.",
        address: '1500 Masters Blvd, 33896, Davenport, United States of America',
        starRating: 5,
        category: 'Resort'
      }
    ];
    expect(result).toEqual(expectedResult);
  });
});
