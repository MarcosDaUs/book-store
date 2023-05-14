import React from "react";
import { redirect } from "next/navigation";
import { GetAllBooksResponse } from "../types/books.type";
import { BookStoreApi } from "../enums/apis.enum";
import BooksListCards from "../components/BooksListCards";

async function getBooks() {
  const endPoint: string = `${BookStoreApi.api}${
    "getAllBooks" in BookStoreApi.endPoints &&
    typeof BookStoreApi.endPoints.getAllBooks === "string"
      ? BookStoreApi.endPoints.getAllBooks
      : ""
  }`;
  const res = await fetch(endPoint, { cache: "no-store" });
  if (!res.ok) {
    return undefined;
  }

  const data = await res.json();
  if (!("books" in data)) {
    return undefined;
  }
  return data as GetAllBooksResponse;
}

export default async function Page() {
  const data = await getBooks();

  const [allBooksResponse] = await Promise.all([data]);
  return (
    <>
      <h1> Catalogo de Libros </h1>
      <BooksListCards books={allBooksResponse?.books ?? []} />
    </>
  );
}
