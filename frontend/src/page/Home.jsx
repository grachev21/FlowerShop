import styled from "styled-components";
import AutoCarousel from "../components/organisms/carousel/auto_carousel/AutoCarousel";
import { TitleXXL, Banner } from "@/components";
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
  const dataCarousel = useGetRequest("http://127.0.0.1:8000/api/Carousel/");
  const dataType = useGetRequest("http://127.0.0.1:8000/api/TypeProduct/");
  console.log(dataType.data);

  if (dataCarousel.loading) return <div>Загрузка...</div>;
  if (dataCarousel.error) return <div>Ошибка: {dataCarousel.error.message}</div>;

  return (
    <ContainerStyled>
      <TitleXXL content={title_1} />
      <AutoCarousel data={dataCarousel.data} />
      <TitleXXL content={title_2} />
      {/* <Table  data={dataType.data}/> */}
      <Banner img={banerImg} />
      {/* <Table /> */}
    </ContainerStyled>
  );
};
export default Home;
