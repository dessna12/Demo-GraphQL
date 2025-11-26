import { authors } from "../../data/authors.js";
import { publishers } from "../../data/publishers.js";
import { genres } from "../../data/genres.js";

export const Book = {
  author: (parent) => authors.find(a => a.id === parent.authorId),
  publisher: (parent) => publishers.find(p => p.id === parent.publisherId),
  genre: (parent) => genres.find(g => g.id === parent.genreId),
};
