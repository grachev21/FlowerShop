import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "@/styles/GlobalStyles";
import { Home, Catalog, LoginAndRegister, Product } from "@/page";
import { Footer, Header } from "@/components";

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
