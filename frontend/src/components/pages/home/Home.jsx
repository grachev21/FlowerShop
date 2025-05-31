import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { TitleXXL, Banner, AutoCarousel, Load, FramesOneThree, CardITB } from "@/components";

import banerImg from "@/media/img/46deb9ec9a0baaf5972b03c82fe968f4.jpg";

const title_1 = "Добро пожаловать в магазины FlowerShop";
const title_2 = "Цветы FlowerShop - на нас полагается - и уже более 20 лет!";

const ContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Home = () => {
  const [isTypeProduct, setTypeProduct] = useState(null)
  const [isCarousel, setCarousel] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [typeProduct, carousel] = await Promise.all([
          axios.get("http://127.0.0.1:8000/core/api/TypeProduct/"),
          axios.get("http://127.0.0.1:8000/assets/api/Carousel/")
        ]);
        setTypeProduct(typeProduct.data), setCarousel(carousel.data);
      }
      catch (error) {
        console.log("error request", error)
      }
    }
    fetchData();
  }, []);

  if (!isTypeProduct || !isCarousel) return <Load />;


  return (
    <ContainerStyled>
      <TitleXXL content={title_1} />
      <AutoCarousel data={isCarousel} />
      <TitleXXL content={title_2} />
      <FramesOneThree>
        {isTypeProduct.map((value) => (
          <CardITB key={value.id} value={value} />
        ))}
      </FramesOneThree>

      <Banner img={banerImg} />

      {/* <FramesOneThree data={dataType} /> */}
      <Banner img={banerImg} />
    </ContainerStyled>
  );
};
export default Home;
