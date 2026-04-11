
const getAllWishListsFromLocalDB = () => {
  const allWishLists = localStorage.getItem("wishLists");

  if (allWishLists) {
    return JSON.parse(allWishLists);
  }

  return [];
};

const addWishListsToLocalDB=(books)=>{
    const allBooks=getAllWishListsFromLocalDB();
    const isExists=allBooks.find(book=>books.bookId===book.bookId);

    if(!isExists){
        allBooks.push(books);
        localStorage.setItem("wishLists", JSON.stringify(allBooks))
    }
}

export {getAllWishListsFromLocalDB,addWishListsToLocalDB}