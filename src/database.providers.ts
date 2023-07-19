import * as mongoose from 'mongoose';

export const dataBaseProviders = [
  {
    provider: 'DATABASE_CONNECTION',
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect(process.env.MONGODB_URL),
  },
];
