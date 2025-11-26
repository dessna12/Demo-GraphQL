import { readFileSync } from "fs";
import path from "path";

const load = (file) =>
  readFileSync(path.resolve("src/graphql/typeDefs", file), "utf8");

export const typeDefs = [
  load("Book.gql"),
  load("Author.gql"),
  load("Publisher.gql"),
  load("Genre.gql"),
  load("Query.gql"),
  load("Mutation.gql")
];
