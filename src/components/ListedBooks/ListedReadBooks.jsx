import { useContext, useEffect, useState } from "react";
import Book from "../UI/Book";
import { BookContext } from "../context/BookContextProvider";

const ListedReadBooks = ({ sortingType }) => {
  const { storedBooks } = useContext(BookContext);
  const [filteredReadLists, setFilteredReadLists] = useState(storedBooks);
  useEffect(() => {
    if (sortingType) {
      if (sortingType === "pages") {
        const sortedLists = [...storedBooks].sort(
          (a, b) => b.totalPages - a.totalPages,
        );
        setFilteredReadLists(sortedLists);
      } else if (sortingType === "rating") {
        const sortedLists = [...storedBooks].sort(
          (a, b) => b.rating - a.rating,
        );
        setFilteredReadLists(sortedLists);
      }
    }
  }, [sortingType, storedBooks]);
  if (filteredReadLists.length === 0) {
    return (
      <div className="h-[50vh] flex justify-center items-center bg-blue-100 rounded-xl my-8">
        <h1 className="text-3xl font-bold text-blue-700">
          No Read List Book Found
        </h1>
      </div>
    );
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-8">
      {filteredReadLists.map((book, ind) => (
        <Book key={ind} book={book} />
      ))}
    </div>
  );
};

export default ListedReadBooks;
