import { books } from "../../data/books.js";
import { authors } from "../../data/authors.js";

export const Query = {
  books: () => books,
  book: (_, args) => books.find((b) => b.id === args.id),
  authors: () => authors
};
