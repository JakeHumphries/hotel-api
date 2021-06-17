import express from 'express';
import { hotelController } from '../hotel.controller';

const hotelRouter = express.Router();

hotelRouter.post('/places-to-stay/ingest', (req, res, next) => hotelController.ingestHotels(req, res, next));

hotelRouter.get('/places-to-stay/:slug', (req, res, next) => hotelController.findHotel(req, res, next));

export default hotelRouter;
