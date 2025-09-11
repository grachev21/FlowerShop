import carousel from "@/assets/carousel";
import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { TitleXXL, Banner, AutoCarousel, Load, FramesOneThree, CardITB } from "@/components";

import bannerImg from "@/media/img/banner.jpg";

const title_1 = "Добро пожаловать в магазины FlowerShop";
const title_2 = "Цветы FlowerShop - на нас полагается - и уже более 20 лет!";

const ContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Home = () => {
  const [isTypeProduct, setTypeProduct] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [typeProduct] = await Promise.all([axios.get("http://127.0.0.1:8000/core/api/TypeProduct/")]);
        console.log(typeProduct);
        setTypeProduct(typeProduct.data);
      } catch (error) {
        console.log("error request", error);
      }
    };
    fetchData();
  }, []);
  if (!isTypeProduct) return <Load />;
  return (
    <ContainerStyled>
      <TitleXXL content={title_1} />
      <AutoCarousel data={carousel} />
      <TitleXXL content={title_2} />
      <FramesOneThree>
        {isTypeProduct.map((value) => (
          <CardITB key={value.id} value={value} />
        ))}
      </FramesOneThree>

      <Banner img={bannerImg} />

      {/* <FramesOneThree data={dataType} /> */}
      <Banner img={bannerImg} />
    </ContainerStyled>
  );
};
export default Home;
