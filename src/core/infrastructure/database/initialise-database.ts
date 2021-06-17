import mongoose from 'mongoose';
import { DatabaseError } from '../../errors/database.error';

export const initialiseDatabase = (): void => {
  mongoose.connect('mongodb://ctUser:ctPass@localhost:27017', { useNewUrlParser: true, useUnifiedTopology: true });

  const db = mongoose.connection;
  db.on('error', () => {
    throw new DatabaseError(500, 'Connection Error!');
  });
};
