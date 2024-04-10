import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./pages/not-found.jsx";
import About from "./pages/about.jsx";
import News from "./pages/news.jsx";
import Contact from "./pages/contact.jsx";
import Layout from "./pages/layout.jsx";
import PracticeAreas from "./pages/practice-areas.jsx";
import CarAccident from "./pages/car-accident.jsx";
import NewsDetails from "./pages/news-details.jsx";

export default function Pages() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<App />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/news" element={<News />} />
          <Route path="/areas-of-practice" element={<PracticeAreas />} />
          <Route path="/car-accident" element={<CarAccident />} />
          <Route path="/news-details" element={<NewsDetails />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Pages />
  </React.StrictMode>
);
