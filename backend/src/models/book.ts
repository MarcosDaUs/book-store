import * as dynamoose from 'dynamoose';
import { Item } from 'dynamoose/dist/Item';

export interface BookInterface {
  bookId: string;
  name: string;
  image: string;
  author: string;
  description: string;
  countInStock: string;
  price: string;
}

class BookModel extends Item {
  bookId!: string;
  name!: string;
  image!: string;
  author!: string;
  description!: string;
  countInStock!: string;
  price!: string;
}

const bookSchema = new dynamoose.Schema(
  {
    bookId: String,
    name: String,
    image: String,
    author: String,
    description: String,
    countInStock: String,
    price: String,
  },
  {}
);

const Book = dynamoose.model<BookModel>('Book', bookSchema);

export default Book;
