import { books } from "../../data/books.js";
import { authors } from "../../data/authors.js";

export const Query = {
  books: () => books,
  book: (_, { id }) => books.find(b => b.id === id),
  authors: () => authors,
  author: (_, { id }) => authors.find(a => a.id === id)
};
