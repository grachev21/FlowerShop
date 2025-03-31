import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyles";

import Home from "./page/Home";
import Catalog from "./page/Catalog";
import LoginAndRegister from "./page/LoginAndRegister";
import Header from "./components/header/Header";

import { Footer } from "@/components";
import Product from "./page/Product";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginAndRegister />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/ProductCard/:id" element={<Product />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
