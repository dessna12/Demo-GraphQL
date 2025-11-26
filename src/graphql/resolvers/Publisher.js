import { books } from "../../data/books.js";

export const Publisher = {
  books: (parent) => books.filter(b => b.publisherId === parent.id)
};
