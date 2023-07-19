import { SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';

const { Schema } = mongoose;

export const productSchema = new Schema({
  productTitle: {
    type: String,
    required: true,
  },
  store: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: false,
  },
  latestPrice: {
    type: String,
    required: true,
  },
  historicalLow: {
    type: String,
    required: false,
  },
  historicalHigh: {
    type: String,
    required: false,
  },
  priceHistory: [
    {
      date: {
        type: String,
        requried: true,
        _id: false,
      },
      price: {
        type: String,
        required: true,
        _id: false,
      },
      _id: false,
    },
  ],
});

// export const Product = new mongoose.Model(productSchema);
