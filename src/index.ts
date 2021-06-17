import express from 'express';
import { errorMiddleware } from './core/infrastructure/api/middleware/error.middleware';
import { initialiseDatabase } from './core/infrastructure/database/initialise-database';
import hotelRouter from './modules/hotel/infrastructure/api/routes';

const main = async () => {
  const app = express();
  const port = process.env.PORT || 3000;

  app.use('/', hotelRouter);
  app.use(errorMiddleware);
  app.listen(port, () => {
    console.log(`Server started on port: ${port}`);
  });

  initialiseDatabase();
};

main().catch((err) => console.log('Uncaught Error:', err));
