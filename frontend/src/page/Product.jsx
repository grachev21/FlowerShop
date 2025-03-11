import { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { MdArrowBackIosNew } from "react-icons/md";
import styleTools from "../styles/styleTools";

const ProductStyled = styled.div`
`;
const LinkBackStyled = styled(NavLink)`
  color: ${styleTools.color.green};
  padding-left: 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100px;
  font-weight: bold;
`;
const BlockImgStyled = styled.div`
  display: flex;
  flex-direction: row;
`;
const ListImgStyled = styled.div``;
const ItemImgStyled = styled.img`
  width: 40px;
  height: 40px;
  margin: 1rem;
  cursor: pointer;
  transition: all, 0.3s;
  box-shadow: 0px 5px 9px 0px rgba(0, 0, 0, ${(props) => props.$shadow});
`;
const BaseImgStyled = styled.img`
  width: 312px;
  height: 312px;
  margin: 1rem;
`;
const DescriptionStyled = styled.div``;

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [isListImg, setListImg] = useState(null);
  const [isIndex, setIndex] = useState(0);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/ProductCard/${id}/`)
      .then((response) => {
        setProduct(response.data);
        setListImg(response.data.photos);
      })
      .catch((error) => {
        console.error("Ошибка при загрузке продукта:", error);
      });
  }, [id]);

  if (!product) {
    return <div>Загрузка...</div>;
  }

  return (
    <ProductStyled>
      <LinkBackStyled to={"/catalog"}>
        <MdArrowBackIosNew />
        Каталог
      </LinkBackStyled>
      <BlockImgStyled>
        <ListImgStyled>
          {isListImg.map((value, index) => {
            return (
              <ItemImgStyled
                key={index}
                src={value.image}
                onClick={() => setIndex(index)}
                $shadow={isIndex == index ? 0.8 : 0}
              />
            );
          })}
        </ListImgStyled>
        <BaseImgStyled src={product.photos[isIndex].image} />
      </BlockImgStyled>
      <DescriptionStyled>{product.description}</DescriptionStyled>
    </ProductStyled>
  );
};
export default Product;
