import styled from "styled-components";
import styleTools from "../../styles/styleTools";

const BannerStyled = styled.div`
  max-width: 1050px;
  padding-top: 6rem;
  padding-bottom: 8rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  display: flex;
  flex-direction: column;
  @media (min-width: ${styleTools.size.sm}) {
    flex-direction: row;
  }
`;
const ImageStyled = styled.div`
  background-size: cover;
  background-position: center;
  background-image: url(${(props) => props.$img});
  width: 100%;
  height: 36vh;
  margin-top: 3rem;
  @media (min-width: ${styleTools.size.sm}) {
    width: 50%;
  }
`;
const TitleStyled = styled.div`
  font-size: x-large;
  margin-top: 3rem;
  margin-bottom: 2rem;
`;
const NameStyled = styled.div`
  font-size: large;
  font-weight: bold;
  margin-bottom: 2rem;
`;
const InfoStyled = styled.div`
  font-size: large;
  margin-right: 2rem;
  @media (min-width: ${styleTools.size.sm}) {
    width: 50%;
    padding-right: 1rem ;
  }
`;
const TextStyled = styled.div``;

const Banner = ({ img }) => {
  return (
    <BannerStyled>
      <InfoStyled>
        <TitleStyled>ОБНОВЛЕНИЯ</TitleStyled>
        <NameStyled>Общая информация:</NameStyled>
        <TextStyled>
          Мы хотели бы отметить, что наш офис не работает в выходные дни (суббота и воскресенье). Электронные письма и заказы читаются лишь
          время от времени. Крайний срок приема заказов и заказов Fleurop – пятница в 17:00.
        </TextStyled>
      </InfoStyled>
      <ImageStyled $img={img} />
    </BannerStyled>
  );
};
export default Banner;
