import { Request, Response, NextFunction } from 'express';
import HttpError from '../models/http-error';
import Book from '../models/book';

export const getAllBooks = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  Book.find().then(
    (allBooks) => {
      res.json({
        books: allBooks.map((book) => book.toObject({ getters: true })),
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
  req: Request<{ id: string }>,
  res: Response,
  next: NextFunction
): void => {
  const bookId: string = req.params.id;
  Book.findById(bookId).then(
    (book) => {
      if (book == null) {
        return next(
          new HttpError('Could not find book for the provided id.', 404)
        );
      }
      res.json({ book: book.toObject({ getters: true }) });
    },
    () => {
      return next(
        new HttpError('Something went wrong, could not find a book.', 500)
      );
    }
  );
};
