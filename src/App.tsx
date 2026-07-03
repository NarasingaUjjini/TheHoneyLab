import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Beeswax from "./pages/Beeswax";
import Skincare from "./pages/Skincare";
import Process from "./pages/Process";
import Contact from "./pages/Contact";
import StyleGuide from "./pages/StyleGuide";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="products" element={<Products />} />
        <Route path="products/beeswax" element={<Beeswax />} />
        <Route path="products/skincare" element={<Skincare />} />
        <Route path="products/:slug" element={<ProductDetail />} />
        <Route path="process" element={<Process />} />
        <Route path="contact" element={<Contact />} />
        <Route path="style-guide" element={<StyleGuide />} />
      </Route>
    </Routes>
  );
}
