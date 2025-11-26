import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import path from "path";
import fs from "fs";

import { Query } from "./graphql/resolvers/Query.js";
import { Book } from "./graphql/resolvers/Book.js";
import { Author } from "./graphql/resolvers/Author.js";
import { Publisher } from "./graphql/resolvers/Publisher.js";
import { Genre } from "./graphql/resolvers/Genre.js";

function loadSchemas() {
  const dir = path.join(process.cwd(), "src/graphql/typeDefs");
  const files = fs.readdirSync(dir).filter(f => f.endsWith(".gql"));

  return files
    .map(f => fs.readFileSync(path.join(dir, f), "utf8"))
    .join("\n");
}

const server = new ApolloServer({
  typeDefs: loadSchemas(),
  resolvers: {
    Query,
    Book,
    Author,
    Publisher,
    Genre
  }
});

const { url } = await startStandaloneServer(server, { listen: { port: 4001 } });

console.log("Serveur lancé sur " + url);
