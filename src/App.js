import React from "react";
import Header from "./components/Header";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import AddBook from "./components/AddBook";
import Books from "./components/Book/Books";
import { Routes, Route } from "react-router-dom";
import About from "./components/About";
import BookDetail from "./components/Book/BookDetail";
import RequireUser from "./components/RequireUser";

function App() {
  return (
    <React.Fragment>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route element={<RequireUser />}>
            <Route path="/" element={<Books />} />
            <Route path="/add" element={<AddBook />} />
            <Route path="/books" element={<Books />} />
            <Route path="/about" element={<About />} />
            <Route path="/books/:id" element={<BookDetail />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;

 
