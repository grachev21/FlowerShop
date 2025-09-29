import { BiRuble } from "react-icons/bi";
import styled from "styled-components";
import { SeparatorLine, ButtonBack, MiniImageShadow, Dot, Load } from "@/components";
import styleTools from "@/styles/styleTools";
import { useGetRequestAuth, useAuthPost } from "@/hooks";

const BasketStyled = styled.div`
  display: flex;
  flex-direction: column;
`;
const ContainerBasketStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const ProductItemStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 30%;
`;
const ImageItemStyled = styled.img`
  width: 4rem;
  height: 4rem;
  margin: 1rem;
`;
const NameProductStyled = styled.div`
  font-weight: 500;
  font-size: large;
`;

const TopBlockStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  box-sizing: border-box;
  width: 100%;
`;
const TitleStyled = styled.div`
  font-weight: 400;
  font-size: 2rem;
  margin-top: 1rem;
  margin-bottom: 0.5rem;
`;
const FormStyled = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const InputStyled = styled.div`
  text-align: center;
  width: 40px;
  height: 30px;
  border: 1px solid ${styleTools.color.grey};
  margin: 1rem;
`;
const Margin = styled.div`
  margin-right: 1rem;
`;
const PriceStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 1.2rem;
`;

const Basket = () => {
  const { data, loading, error } = useGetRequestAuth("http://localhost:8000/core/api/Basket");
  const removeItemRequest = useAuthPost("http://localhost:8000/core/api/Basket/remove_item/");
  console.log(data);

  const removeItem = async (productId) => {
    const result = await removeItemRequest.post({ product: productId });
    if (result?.message) {
      // Обнови корзину или перезапроси данные
      console.log("Удалено:", result.message);
    }
  };

  if (loading) return <Load />;

  return (
    <BasketStyled>
      <TopBlockStyled>
        <ButtonBack content={"Назад"} />
        <TitleStyled>Корзина</TitleStyled>
      </TopBlockStyled>
      <MiniImageShadow />

      {data.map((value, index) => {
        return (
          <ContainerBasketStyled key={index}>
            <ProductItemStyled>
              <ImageItemStyled src={value.photos[0].image} />
              <NameProductStyled>{value.product_name}</NameProductStyled>
            </ProductItemStyled>
            <FormStyled>
              <Margin>
                <Dot flag={"x"} />
              </Margin>
              <Dot flag={"+"} />
              <InputStyled>{value.quantity}</InputStyled>
              <Dot flag={"-"} onClick={() => removeItem(value.id)} />
            </FormStyled>
            <PriceStyled>
              {value.product_price}
              <BiRuble />
            </PriceStyled>
          </ContainerBasketStyled>
        );
      })}

    </BasketStyled>
  );
};
export default Basket;
