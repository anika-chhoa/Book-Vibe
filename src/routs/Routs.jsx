import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import HomePage from "../pages/HomePage";
import Books from "../pages/Books";
import Error from "../pages/Error";
import BookDetails from "../pages/BookDetails";



export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: HomePage,
      },
      {
        path: "/book",
        Component: Books,
      },
      {
        path:"/bookDetails/:id",
        Component: BookDetails,
        loader:()=>fetch("/booksData.json").then((res) => res.json())
      }
    ],
    errorElement:<Error/>
  }
]);