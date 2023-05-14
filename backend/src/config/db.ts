import * as dotenv from 'dotenv';
import mongoose from 'mongoose';
import colors from 'colors';
dotenv.config();

const db: string = process.env.URL_DB_CONNECTION ?? '';

const connectDB = async () => {
  return await mongoose.connect(db).then(
    async (connect) => {
      console.log(
        colors.yellow(`MongoDB is connected:${connect.connection.host}`)
      );
      return await Promise.resolve();
    },
    async (error) => {
      return await Promise.reject(error);
    }
  );
};

export default connectDB;
