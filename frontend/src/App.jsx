import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Footer, Header, Home, Catalog, LoginAndRegister, Product, Basket, Order, OrderDetail } from "@/components";
import "@/styles/styles.css";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <div className="mt-56 p-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LoginAndRegister />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/productCard/:id" element={<Product />} />
            <Route path="/basket" element={<Basket />} />
            <Route path="/order" element={<Order />} />
            <Route path="/orderDetail" element={<OrderDetail />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
