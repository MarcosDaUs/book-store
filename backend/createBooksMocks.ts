import * as dotenv from 'dotenv';
dotenv.config();
import colors from 'colors';
import books from './src/data/books';
import Book from './src/models/book';
import connectDB from './src/config/db';

connectDB()
  .then(async () => {
    return await Book.scan()
      .all()
      .exec()
      .then(
        async (allBooks) => {
          if (Array.isArray(allBooks)) {
            const promises = allBooks.map((book) => {
              return new Promise((resolve, reject) => {
                return book
                  .delete()
                  .then(() => {
                    return resolve(1);
                  })
                  .catch((error) => {
                    return reject(error);
                  });
              });
            });
            return await Promise.all(promises)
              .then(async () => {
                console.log(colors.gray('Data deleted!'));

                const promises = books.map((book) => {
                  return new Promise((resolve, reject) => {
                    return Book.create(book)
                      .then(() => {
                        return resolve(1);
                      })
                      .catch((error) => {
                        return reject(error);
                      });
                  });
                });

                return await Promise.all(promises)
                  .then(() => {
                    console.log(colors.green.bold('Data imported!'));
                    process.exit();
                  })
                  .catch(async (error) => {
                    return await Promise.reject(error);
                  });
              })
              .catch(async (error) => {
                return await Promise.reject(error);
              });
          }
          return await Promise.reject('no get nothing of table');
        },
        async (error) => {
          return await Promise.reject(error);
        }
      );
  })
  .catch((error) => {
    console.error(colors.red.inverse(`${error}`));
  });
