import React from 'react';
import { Col, Row } from 'react-bootstrap';

import data from '../data/books';
import Book from '../components/Book';

const HomeScreen = () => {

  return (
    <>
      <h1> Catalogo de Libros </h1>
      <Row>
        {data.map((book) => (
          <Col sm={12} md={6} lg={4} xl={3}>
            <Book book={book} />
          </Col>
        ))}
      </Row>
    </>
  );
}

export default HomeScreen;
