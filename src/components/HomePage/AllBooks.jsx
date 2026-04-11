import { use } from "react";
import Book from "../UI/Book";

const BooksPromise = fetch("/booksData.json").then((res) => res.json());

const AllBooks = () => {
  const books = use(BooksPromise);

  return (
    <div className="my-12 container mx-auto">
      <h1 className="font-bold text-3xl text-center">Books</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-8">
        {books.map((book, index) => (
          <Book key={index} book={book} />
        ))}
      </div>
    </div>
  );
};

export default AllBooks;
