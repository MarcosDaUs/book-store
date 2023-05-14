import React from "react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { BookStoreApi } from "../../../enums/apis.enum";
import { GetBookByIdResponse } from "../../../types/books.type";
import BookInfo from "../../../components/BookInfo";

type PageProps = {
  params: {
    id: string;
  };
};

async function getBookById(id: string) {
  const endPoint: string = `${BookStoreApi.api}${
    "getBookById" in BookStoreApi.endPoints &&
    typeof BookStoreApi.endPoints.getBookById !== "string"
      ? BookStoreApi.endPoints.getBookById(id)
      : ""
  }`;
  const res = await fetch(endPoint, { cache: "no-store" });
  if (!res.ok) {
    return undefined;
  }

  const data = await res.json();
  if (!("book" in data)) {
    return undefined;
  }
  return data as GetBookByIdResponse;
}

export default async function Page({ params }: PageProps) {
  const data = await getBookById(params.id);

  const [bookByIdResponse] = await Promise.all([data]);
  if (!bookByIdResponse?.book) {
    redirect("/");
  }
  return (
    <>
      <Link className="btn btn-light my-3" href="/">
        Regresar...
      </Link>
      <BookInfo book={bookByIdResponse.book} />
    </>
  );
}
