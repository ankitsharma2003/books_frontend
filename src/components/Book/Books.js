import React, { useEffect, useState } from "react";
import axios from "axios";
import Book from "./Book";
import './Book.css'
const URL = "https://books-api-topaz.vercel.app/books";

const fetchHandler = async () => {
  return axios.get(URL).then((res) => res.data);
};

const Books = () => {
  const [books, setBooks] = useState();
  useEffect(() => {
    fetchHandler().then((data) => setBooks(data.books));
  }, []);
  console.log(books);
  return <div>
    <ul>
      {books && books.map((book, i) => (
        <li className="book" key={i}>
            <Book book={book}/>
        </li>
      ))}
    </ul>
  </div>;
};

export default Books;
