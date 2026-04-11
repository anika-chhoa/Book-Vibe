import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import "./index.css";
import { router } from "./routs/Routs";
import BookContextProvider from "./components/context/BookContextProvider";
import { ToastContainer } from "react-toastify";



createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BookContextProvider>
    <RouterProvider router={router} />
    <ToastContainer />
    </BookContextProvider>
  </StrictMode>,
);
