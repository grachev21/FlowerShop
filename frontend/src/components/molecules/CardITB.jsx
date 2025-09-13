import styled from "styled-components";
import styleTools from "@/styles/styleTools";
import { useNavigate } from "react-router-dom";
import { ButtonPadding, ImageTable, TitleXL } from "@/components";

const LinkStyled = styled.div`
  width: 100%;
  padding-left: 2rem;
  padding-right: 2rem;
`;
const CardStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  @media (min-width: ${styleTools.size.sm}) {
    width: 100%;
  }
`;
const CardITB = ({ value }) => {
  const navigate = useNavigate();
  const handleClick = (id) => {
    navigate("/catalog", { state: id });
  };

  return (
    <CardStyled>
      <ImageTable image={value.image} />
      <TitleXL content={value.slogan} />
      <LinkStyled>
        <ButtonPadding
          onClick={() => {
            handleClick(value.id);
          }}
          content={value.name}
        />
      </LinkStyled>
    </CardStyled>
  );
};
export default CardITB;
