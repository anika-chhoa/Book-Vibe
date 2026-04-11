import { createContext, useState } from "react";
import { toast } from "react-toastify";
import { addReadListsToLocalDB, getAllReadListsFromLocalDB } from "../../utils/ReadListsLocalDB";
import { addWishListsToLocalDB, getAllWishListsFromLocalDB } from "../../utils/WishListsLocalDb";

export const BookContext = createContext();

const BookContextProvider = ({ children }) => {
  const [storedBooks, setStoredBook] = useState(()=>getAllReadListsFromLocalDB());
  const [wishLists, setWishLists] = useState(()=>getAllWishListsFromLocalDB());

  const handleMarkAsRead = (currentBook) => {
    addReadListsToLocalDB(currentBook);
    const isExists = storedBooks.find(
      (book) => book.bookId === currentBook.bookId,
    );
    if (isExists) {
      toast.error(`${currentBook.bookName} exists in the read list`);
    } else {
      setStoredBook([...storedBooks, currentBook]);
      toast.success(`${currentBook.bookName} is added to read list`);
    }
  };

  const handleWishLists = (currentBook) => {
    addWishListsToLocalDB(currentBook)
    const isWishList=storedBooks.find(book=>book.bookId===currentBook.bookId);
    if(isWishList){
        toast.error(`${currentBook.bookName} is already marked as read`)
        return;
    }

    const isExists = wishLists.find(
      (book) => book.bookId === currentBook.bookId,
    );
    if (isExists) {
      toast.error(`${currentBook.bookName} exists in Wishlist`);
    } else {
      setWishLists([...wishLists, currentBook]);
      toast.success(`${currentBook.bookName} is added to Wishlist`);
    }
  };

  const data = {
    storedBooks,
    setStoredBook,
    handleMarkAsRead,
    wishLists,
    setWishLists,
    handleWishLists
  };
  return <BookContext.Provider value={data}>{children}</BookContext.Provider>;
};

export default BookContextProvider;
