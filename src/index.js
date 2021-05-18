import React from "react";
import ReactDom from "react-dom";
import "./style.css";
import { books } from "./books";

import Book from "./Book";

const names = ["John", "Peter", "Susan"];
function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book key={book.id} {...book}></Book>;
      })}
    </section>
  );
}

ReactDom.render(<BookList />, document.getElementById("root"));
