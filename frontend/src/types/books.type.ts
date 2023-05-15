export interface Book {
  bookId: string;
  name: string;
  image: string;
  author: string;
  description: string;
  countInStock: string;
  price: string;
}

export interface GetAllBooksResponse {
  books: Book[];
}

export interface GetBookByIdResponse {
  book: Book;
}
