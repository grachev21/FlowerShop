import { MdOutlineCurrencyRuble } from "react-icons/md";
import styled from "styled-components";

const PriceStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 1.6rem;
  margin: 1rem;
`;

const Price = ({ content }) => {
    return (
        <PriceStyled>
            <p>{content}</p>
            <MdOutlineCurrencyRuble size={26}/>
        </PriceStyled>
    );
}
export default Price;