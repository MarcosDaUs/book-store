"use client";
import React from "react";
import { Col, Row } from "react-bootstrap";
import { Book } from "../types/books.type";
import BookCard from "./BookCard";

type BooksProps = {
  books: Book[];
};

const BooksListCards = ({ books }: BooksProps) => {
  return (
    <Row>
      {books.map((book) => (
        <Col key={book._id} sm={12} md={6} lg={4} xl={3}>
          <BookCard book={book} />
        </Col>
      ))}
    </Row>
  );
};

export default BooksListCards;
