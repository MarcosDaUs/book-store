import { Schema, model } from 'mongoose';

export interface BookInterface {
  name: string;
  image: string;
  author: string;
  description: string;
  countInStock: string;
  price: string;
}

const bookSchema = new Schema<BookInterface>({
  name: { type: String, required: true },
  image: { type: String, required: true },
  author: { type: String, required: true },
  description: { type: String, required: true },
  countInStock: { type: String, required: true },
  price: { type: String, required: true },
});

const Book = model<BookInterface>('Book', bookSchema);

export default Book;
