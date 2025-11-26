import { books } from "../../data/books.js";

export const Mutation = {
  addBook: (_, args) => {
    const newBook = {
      id: String(books.length + 1),
      title: args.title,
      authorId: args.authorId
    };

    books.push(newBook);
    return newBook;
  }
};
