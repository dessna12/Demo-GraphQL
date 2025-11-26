import { books } from "../../data/books.js";

export const Genre = {
  books: (parent) => books.filter(b => b.genreId === parent.id)
};
