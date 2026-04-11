import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router";

const Book = ({ book }) => {
  
  return (
    <Link to={`/bookDetails/${book.bookId}`} className="">
      <div className="card bg-base-100 w-96 shadow-sm h-full">
        <figure className="m-6 bg-gray-100 rounded-xl">
          <div className="p-6">
            <img src={book.image} alt={book.bookName} className="rounded-xl h-[250px]" />
          </div>
        </figure>
        <div className="card-body">
          <div className="flex gap-4">
            {book.tags.map((tag, index) => (
              <div
                key={index}
                className="badge badge-soft badge-success text-green-500 font-semibold"
              >
                {tag}
              </div>
            ))}
          </div>
          <h2 className="card-title font-bold text-2xl">{book.bookName}</h2>
          <p className="font-semibold text-lg">By: {book.author}</p>
          <div className="card-actions justify-between border-t border-dashed pt-2 border-gray-300 text-xl font-semibold">
            <div className="">{book.category}</div>
            <div className="flex gap-2 justify-center items-center">
              {book.rating} <FaRegStar />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
