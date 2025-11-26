import { authors } from "../../data/authors.js";

export const Book = {
  author: (parent) => authors.find((a) => a.id === parent.authorId)
};
