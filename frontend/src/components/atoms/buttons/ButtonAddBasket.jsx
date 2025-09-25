import styled from "styled-components";
import styleTools from "@/styles/styleTools";
import { useAuthPost } from "@/hooks";


const ButtonAddBasketStyled = styled.div`
  position: relative;
  color: ${styleTools.color.green};
  padding-top: 0.8rem;
  padding-bottom: 0.6rem;
  border: 1px solid ${styleTools.color.green};
  text-transform: uppercase;
  font-size: large;
  font-weight: 400;
  width: 100%;
  text-align: center;
  cursor: pointer;
  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: ${styleTools.color.green};
    opacity: 0%;
  }
  &:hover::before {
    opacity: 15%;
  }
`;
const ButtonAddBasket = ({ productId }) => {
  console.log(productId)
  const { post, loading, error, data } = useAuthPost('http://127.0.0.1:8000/core/api/Basket/');

  const handleClick = async () => {
    try {
      const result = await post({
        product: productId,
        quantity: 1
      });

      // result содержит данные ответа от сервера
      console.log('Товар добавлен:', result);

    } catch (err) {
      // Ошибка уже обработана в хуке, но можно добавить дополнительную логику
    }
  };
  return (
    <ButtonAddBasketStyled onClick={handleClick}>ДОБАВИТЬ В КОРЗИНУ</ButtonAddBasketStyled>
  );
}
export default ButtonAddBasket;