
const getAllReadListsFromLocalDB = () => {
  const allReadLists = localStorage.getItem("readLists");

  if (allReadLists) {
    return JSON.parse(allReadLists);
  }

  return [];
};

const addReadListsToLocalDB=(books)=>{
    const allBooks=getAllReadListsFromLocalDB();
    const isExists=allBooks.find(book=>books.bookId===book.bookId);

    if(!isExists){
        allBooks.push(books);
        localStorage.setItem("readLists", JSON.stringify(allBooks))
    }
}

export {getAllReadListsFromLocalDB,addReadListsToLocalDB}