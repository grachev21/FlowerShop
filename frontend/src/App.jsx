import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Footer, Header, Home, Catalog, LoginAndRegister, Product, Basket } from "@/components";
import styled from "styled-components";
import GlobalStyle from "@/styles/GlobalStyles";

const ContainerStyled = styled.div`
  margin-top: 14rem;
  padding: 2rem;
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Header />
        <ContainerStyled>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LoginAndRegister />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/productCard/:id" element={<Product />} />
            <Route path="/basket" element={<Basket />} />
          </Routes>
        </ContainerStyled>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
