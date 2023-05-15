import { ApiData } from "../types/apis.type";

export const BookStoreApi: ApiData = {
  api: `${String(process.env.BOOK_STORE_API_URL) ?? ""}/api/bookStore`,
  endPoints: {
    getAllBooks: "/",
    getBookById: <T>(id: T): string => `/${typeof id === "string" ? id : ""}`,
  },
};
