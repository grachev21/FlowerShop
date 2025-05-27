import { useState } from "react";
import styled from "styled-components";
import { useParams, NavLink } from "react-router-dom";
import { MdArrowBackIosNew, MdOutlineCurrencyRuble } from "react-icons/md";
import { useGetRequest } from "@/hooks";
import { Load, Price, MiniImageShadow, Paragraph, ButtonPadding, ButtonSimple } from "@/components";
import styleTools from "@/styles/styleTools";

const ProductStyled = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 1rem;
  @media (min-width: ${styleTools.size.sm}) {
    flex-direction: row;
  }
`;
const LinkBackStyled = styled(NavLink)`
  color: ${styleTools.color.green};
  display: flex;
  align-items: center;
`;
const BlockImgStyled = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
  @media (min-width: ${styleTools.size.sm}) {
    width: 60%;
  }
`;
const ListImgStyled = styled.div`
  width: 40px;
  margin-right: 2rem;
`;
const BlockBaseImgStyled = styled.div`
  width: 100%;
  height: auto;
`;
const BaseImgStyled = styled.img``;
const BlockUtilsStyled = styled.div`
  margin-left: 1rem;
  margin-top: 1rem;
`;
const NameStyled = styled.div`
  font-weight: bold;
  font-size: 1.8rem;
  margin-top: 1rem;
`;
const Product = () => {
  const { id } = useParams();
  const [activeIndex, setActiveIndex] = useState(0);
  const dataProduct = useGetRequest(`http://localhost:8000/api/ProductCard/${id}/`)


  if (dataProduct.loading) return <Load />

  return (
    <>
      <LinkBackStyled to={"/catalog"}>
        <MdArrowBackIosNew />
        <ButtonSimple content={"Каталог"} />
      </LinkBackStyled>

      <ProductStyled>
        <BlockImgStyled>
          <ListImgStyled>
            {dataProduct.data.photos.map((value, index) => (
              <MiniImageShadow
                key={index}
                image={value.image}
                onClick={() => setActiveIndex(index)}
                active={activeIndex === index}
              />
            ))}
          </ListImgStyled>
          <BlockBaseImgStyled>
            <BaseImgStyled src={dataProduct.data.photos[activeIndex].image} />
            <Paragraph content={dataProduct.data.description} />
          </BlockBaseImgStyled>
        </BlockImgStyled>

        <BlockUtilsStyled>
          <NameStyled>{dataProduct.data.name}</NameStyled>
          <Price content={dataProduct.data.price} />
          <ButtonPadding content={"Добавить в корзину"} />
        </BlockUtilsStyled>
      </ProductStyled>
    </>
  );
};

export default Product;
