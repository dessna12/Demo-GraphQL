import { books } from "../../data/books.js";

export const Author = {
  books: (parent) => books.filter((b) => b.authorId === parent.id)
};
