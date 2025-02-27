import styled from "styled-components";
import styleTools from "../../styles/styleTools";

const BannerStyled = styled.div`
  width: 100%;
  padding-top: 3rem;
  padding-bottom: 3rem;
  padding-left: 2rem;
  padding-right: 2rem;
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
  height: 30vh;
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
