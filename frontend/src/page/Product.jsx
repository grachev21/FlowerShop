import { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { useParams, NavLink } from "react-router-dom";
import { MdArrowBackIosNew, MdOutlineCurrencyRuble } from "react-icons/md";
import styleTools from "../styles/styleTools";
import LinkPadding from "../components/links/linkPadding";

const ContainerStyled = styled.div``;
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
  padding-left: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: 100px;
  font-weight: bold;
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
const ItemImgStyled = styled.img`
  min-width: 40px;
  height: auto;
  margin-bottom: 1rem;
  cursor: pointer;
  transition: all 0.3s;
  box-shadow: 0px 5px 9px 0px rgba(0, 0, 0, ${(props) => (props.$active ? 0.8 : 0)});
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

const DescriptionStyled = styled.div`
  font-size: small;
  width: 100%;
  margin-top: 1rem;
`;
const NameStyled = styled.div`
  font-weight: bold;
  font-size: 1.8rem;
  margin-top: 1rem;
`;
const PriceStyled = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  margin: 1rem 0;
`;

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  // const [ post, loading, error, data ] = useAuthPost()

  console.log(id, "<<< id");
  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/ProductCard/${id}/`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.error("Ошибка при загрузке продукта:", error);
      });
  }, [id]);

  if (!product) return <div>Загрузка...</div>;

  return (
    <ContainerStyled>
      <LinkBackStyled to="/catalog">
        <MdArrowBackIosNew />
        Каталог
      </LinkBackStyled>
      <ProductStyled>
        <BlockImgStyled>
          <ListImgStyled>
            {product.photos.map((photo, index) => (
              <ItemImgStyled key={index} src={photo.image} onClick={() => setActiveIndex(index)} $active={activeIndex === index} />
            ))}
          </ListImgStyled>
          <BlockBaseImgStyled>
            <BaseImgStyled src={product.photos[activeIndex].image} />
            <DescriptionStyled>{product.description}</DescriptionStyled>
          </BlockBaseImgStyled>
        </BlockImgStyled>

        <BlockUtilsStyled>
          <NameStyled>{product.name}</NameStyled>
          <PriceStyled>
            {product.price} <MdOutlineCurrencyRuble />
          </PriceStyled>
          <LinkPadding content={"Добавить в корзину"} />
        </BlockUtilsStyled>
      </ProductStyled>
    </ContainerStyled>
  );
};

export default Product;
