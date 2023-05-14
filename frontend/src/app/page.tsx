import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Col, Row } from "react-bootstrap";
// import Book from "../components/Book";

async function getBooks() {
  const res = await fetch("https://restcountries.com/v3.1/all?fields=name");
  console.log("res: ", res);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json;
}

export default async function Page() {
  const data = await getBooks();

  return (
    <>
      <h1> Catalogo de Libros </h1>
    </>
  );
}
