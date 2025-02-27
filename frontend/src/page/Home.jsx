import styled from "styled-components";
import AutoCarousel from "../components/carousel/auto_carousel/AutoCarousel";
import TitleXXL from "../components/titles/TitleXXl";
import Table from "../components/table/Table";
import Banner from "../components/banner/Banner";
import banerImg from "../media/img/46deb9ec9a0baaf5972b03c82fe968f4.jpg"

const title_1 = "Добро пожаловать в флористы Blumen Schmidt-Their в главном районе и Франкфурте";
const title_2 = "Цветы Шмидт - на нас полагается - и уже более 20 лет!";

const ContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Home = () => {
  return (
    <ContainerStyled>
      <TitleXXL content={title_1} />
      <AutoCarousel />
      <TitleXXL content={title_2} />
      <Table />
      <Banner img={banerImg}/>
    </ContainerStyled>
  );
};
export default Home;
