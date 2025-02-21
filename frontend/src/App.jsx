import { BrowserRouter, Routes, Route } from "react-router-dom";

import styled from "styled-components";
import Header from "./components/header/Header";
import Home from "./page/Home";


const ContainerStyled = styled.div``;

const App = () => {
  return (
    <ContainerStyled>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </ContainerStyled>
  );
};

export default App;
