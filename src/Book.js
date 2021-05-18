import React from "react";

const Book = (props) => {
  const { img, title, author } = props;
  const clickHandler = () => {
    alert("hello world");
  };
  const complexExample = (author) => {
    console.log(author);
  };
  // console.log(img);
  return (
    <article
      className="book"
      onMouseOver={() => {
        console.log(title);
      }}
    >
      <img style={{ width: "30%" }} src={img}></img>
      <h1
        onClick={() => {
          console.log(title);
        }}
      >
        {title}
      </h1>
      <h4
        style={{ color: "#617d98", fontSize: "0.75rem", marginTop: "0.25rem" }}
      >
        {author.toUpperCase()}
      </h4>
      <button type="button" onClick={clickHandler}>
        Reference Example
      </button>
      <button type="button" onClick={() => complexExample(author)}>
        More complex example
      </button>
    </article>
  );
};

export default Book;
