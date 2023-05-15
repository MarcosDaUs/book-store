import { Request, Response, NextFunction } from 'express';
import HttpError from '../models/http-error';
import Book from '../models/book';

export const getAllBooks = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  Book.scan()
    .all()
    .exec()
    .then(
      (allBooks) => {
        res.json({
          books: allBooks,
        });
      },
      () => {
        return next(
          new HttpError('Fetching books failed, please try again later.', 500)
        );
      }
    );
};

export const getBookById = (
  req: Request<{ bookId: string }>,
  res: Response,
  next: NextFunction
): void => {
  const bookId: string = req.params.bookId;
  Book.scan('bookId')
    .eq(bookId)
    .exec()
    .then(
      (book) => {
        if (book == null) {
          return next(
            new HttpError('Could not find book for the provided id.', 404)
          );
        }
        res.json({
          book: Array.isArray(book) && book.count === 1 ? book[0] : book,
        });
      },
      () => {
        return next(
          new HttpError('Something went wrong, could not find a book.', 500)
        );
      }
    );
};
