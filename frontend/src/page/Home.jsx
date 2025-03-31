import styled from "styled-components";
import AutoCarousel from "../components/carousel/auto_carousel/AutoCarousel";
import TitleXXL from "../components/titles/TitleXXl";
import Table from "../components/table/Table";
import Banner from "../components/banner/Banner";
import banerImg from "../media/img/46deb9ec9a0baaf5972b03c82fe968f4.jpg";
import useGetRequest from "../customHooks/useGetRequest";

const title_1 = "Добро пожаловать в магазины FlowerShop";
const title_2 = "Цветы FlowerShop - на нас полагается - и уже более 20 лет!";

const ContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Home = () => {
  const dataCarousel = useGetRequest("http://127.0.0.1:8000/api/CarouselSet/");
  const dataType = useGetRequest("http://127.0.0.1:8000/api/ProductCard/")
  console.log(dataType);

  if (dataCarousel.loading) return <div>Загрузка...</div>;
  if (dataCarousel.error) return <div>Ошибка: {dataCarousel.error.message}</div>;

  return (
    <ContainerStyled>
      <TitleXXL content={title_1} />
      <AutoCarousel data={dataCarousel.data} />
      <TitleXXL content={title_2} />
      <Table />
      <Banner img={banerImg} />
      {/* <Table /> */}
    </ContainerStyled>
  );
};
export default Home;
