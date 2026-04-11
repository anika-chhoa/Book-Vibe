import { useContext } from "react";
import { useLoaderData, useParams } from "react-router";
import { BookContext } from "../components/context/BookContextProvider";

const BookDetails = () => {
  const { id } = useParams();

  const allBooks = useLoaderData();

  const expectedBook = allBooks.find((book) => book.bookId == id);
  const {
    author,
    bookName,
    category,
    image,
    publisher,
    rating,
    review,
    tags,
    totalPages,
    yearOfPublishing,
  } = expectedBook;

  const {handleMarkAsRead, handleWishLists}=useContext(BookContext);


  return (
    <div className=" bg-base-100 container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 py-4 my-8">
      <figure className="flex justify-center items-center bg-gray-100 rounded-xl">
        <img className="h-[480px]" src={image} alt={bookName} />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-5xl font-bold">{bookName}</h2>
        <p className="text-lg text-gray-600 font-semibold mt-2">By: {author}</p>
        <p className="text-lg text-gray-600 font-semibold mt-2 py-3 border-t border-b border-gray-200 ">
          {category}
        </p>
        <p className="text-lg text-black font-bold py-3 border-b border-gray-200 ">
          Review: <span className="text-gray-500 font-medium">{review}</span>
        </p>
        <div className="flex gap-4 text-lg font-bold items-center py-3 border-b border-gray-200">
          Tags:{" "}
          {tags.map((tag, index) => (
            <div
              key={index}
              className="badge badge-soft badge-success text-green-500 text-lg font-semibold"
            >
              {tag}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-y-2 text-lg mt-2">
            <p className="text-gray-500 font-semibold">No. of Pages:</p>
            <p className="font-bold">{totalPages}</p>
        </div>
        <div className="grid grid-cols-2 gap-y-2 text-lg mt-2">
            <p className="text-gray-500 font-semibold">Publisher:</p>
            <p className="font-bold">{publisher}</p>
        </div>
        <div className="grid grid-cols-2 gap-y-2 text-lg mt-2">
            <p className="text-gray-500 font-semibold">Year of publishing:</p>
            <p className="font-bold">{yearOfPublishing}</p>
        </div>
        <div className="grid grid-cols-2 gap-y-2 text-lg mt-2">
            <p className="text-gray-500 font-semibold">Rating:</p>
            <p className="font-bold">{rating}</p>
        </div>

        <div className="card-actions gap-6">
          <button onClick={()=>handleMarkAsRead(expectedBook)} className="btn">Mark As Read</button>
          <button onClick={()=>handleWishLists(expectedBook)} className="btn btn-success text-white">Add To Wishlist</button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
