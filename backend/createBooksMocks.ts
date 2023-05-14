import * as dotenv from 'dotenv';
import colors from 'colors';
import books from './src/data/books';
import Book from './src/models/book';
import connectDB from './src/config/db';

dotenv.config();

connectDB()
  .then(async () => {
    return await Book.deleteMany().then(
      async () => {
        console.log(colors.gray('Data deleted!'));

        const sampleBooks = books.map((book) => {
          return { ...book };
        });

        return await Book.insertMany(sampleBooks).then(
          async () => {
            console.log(colors.green.bold('Data imported!'));
            process.exit();
          },
          async (error) => {
            return await Promise.reject(error);
          }
        );
      },
      async (error) => {
        return await Promise.reject(error);
      }
    );
  })
  .catch((error) => {
    console.error(colors.red.inverse(`${error}`));
  });
