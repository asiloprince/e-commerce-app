import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import HomePage from "./views/pages/HomePage.jsx";
import ProductPage from "./views/pages/ProductPage.jsx";
import { Provider } from "react-redux";
import store from "./state/store.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index={true} element={<HomePage />} />
            <Route path="/product/:id" element={<ProductPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
