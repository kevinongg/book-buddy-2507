import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import { AuthProvider } from "./auth/AuthContext";
import { ApiProvider } from "./api/ApiContext";
import "./index.css";

import Layout from "./layout/layout";
import BooksPage from "./books/BooksPage";
import Login from "./auth/Login";
import Register from "./auth/Register";
import SingleBookPage from "./books/SingleBookDetail";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <ApiProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route index element={<BooksPage />}></Route>
              <Route path={"/books"} element={<BooksPage />}></Route>
              <Route
                path={"/books/:bookId"}
                element={<SingleBookPage />}
              ></Route>
              <Route path={"/login"} element={<Login />}></Route>
              <Route path={"/register"} element={<Register />}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </ApiProvider>
    </AuthProvider>
  </StrictMode>
);
