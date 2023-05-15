"use client";
import React from "react";
import { Row, Col, Image, ListGroup } from "react-bootstrap";
import { Book } from "../types/books.type";

type BookInfoProp = {
  book: Book;
};

const BookInfo = ({ book }: BookInfoProp) => {
  return (
    <Row>
      <Col md={4}>
        <Image src={book.image} alt={book.name} fluid />
      </Col>

      <Col md={4}>
        <ListGroup variant="flush">
          <ListGroup.Item>
            <h3>{book.name}</h3>
          </ListGroup.Item>
          <ListGroup.Item>Autor: {book.author}</ListGroup.Item>
          <ListGroup.Item variant="flush">
            Descripción: {book.description}
          </ListGroup.Item>
        </ListGroup>
      </Col>
      <Col md={3}>
        <ListGroup variant="flush">
          <ListGroup.Item>
            Estado:{" "}
            {Number(book.countInStock) > 0 ? "Disponible" : "No Disponible"} (
            {book.countInStock}) uds
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Precio:</strong> {book.price}
          </ListGroup.Item>
        </ListGroup>
      </Col>
    </Row>
  );
};
export default BookInfo;
