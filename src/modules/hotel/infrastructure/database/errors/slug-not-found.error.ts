import { DatabaseError } from '../../../../../core/errors/database.error';

class SlugNotFound extends DatabaseError {
  constructor(slug: string) {
    super(404, `No Hotel With slug:${slug}`);
  }
}

export default SlugNotFound;
