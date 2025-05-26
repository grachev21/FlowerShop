import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Footer, Header, Home, Catalog, LoginAndRegister, Product } from "@/components";
import styled from "styled-components";
import GlobalStyle from "@/styles/GlobalStyles";

const ContainerStyled = styled.div`
  margin-top: 14rem;
  padding: 1rem;
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
            <Route path="/ProductCard/:id" element={<Product />} />
          </Routes>
        </ContainerStyled>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
