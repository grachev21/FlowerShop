import { useGetRequest } from "@/hooks";
import styled from "styled-components";
import { TitleXXL, Banner, AutoCarousel, Load, TableOneThree, CardITB } from "@/components";

import banerImg from "@/media/img/46deb9ec9a0baaf5972b03c82fe968f4.jpg";

const title_1 = "Добро пожаловать в магазины FlowerShop";
const title_2 = "Цветы FlowerShop - на нас полагается - и уже более 20 лет!";

const ContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Home = () => {
  const dataCarousel = useGetRequest("http://127.0.0.1:8000/assets/api/Carousel/");
  const dataType = useGetRequest("http://127.0.0.1:8000/core/api/TypeProduct/");

  if (dataType.loading) return <Load />;
  if (dataCarousel.loading) return <Load />;
  if (dataCarousel.error) return <div>Ошибка: {dataCarousel.error.message}</div>;

  return (
    <ContainerStyled>
      <TitleXXL content={title_1} />
      <AutoCarousel data={dataCarousel.data} />
      <TitleXXL content={title_2} />
      <TableOneThree>
        {dataType.data.map((value) => (
          <CardITB key={value.id} value={value} />
        ))}
      </TableOneThree>

      <Banner img={banerImg} />

      {/* <TableOneThree data={dataType} /> */}
      <Banner img={banerImg} />
    </ContainerStyled>
  );
};
export default Home;
