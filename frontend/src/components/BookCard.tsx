import React from "react";
import Link from "next/link";
import { Card } from "react-bootstrap";
import { Book } from "../types/books.type";

type BookCardProps = {
  book: Book;
};

const BookCard = ({ book }: BookCardProps) => {
  return (
    <Card className="my-3 p-3 rounded">
      <Link href={`/book/${book.bookId}`}>
        <Card.Img src={book.image} variant="top" />
      </Link>

      <Card.Body>
        <Link href={`/book/${book.bookId}`}>
          <Card.Title as="div">
            <strong>{book.name}</strong>
          </Card.Title>
        </Link>

        <Card.Text as="h3">{book.price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default BookCard;
