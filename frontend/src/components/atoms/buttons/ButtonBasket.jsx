import styled from "styled-components";
import { SlBasket } from "react-icons/sl";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Load } from "@/components";

const ButtonBasketStyled = styled(NavLink)`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: min-content;
`;
const NumberStyled = styled.div`
  font-size: 1.2rem;
  margin-left: 10px;
`;
const ButtonBasket = () => {
  const [isBasket, setBasket] = useState({})
  const [isError, setError] = useState(null)

  // === get check user request ===
  useEffect(() => {
    const fetchBasket = async () => {
      try {
        const token = localStorage.getItem("token")
        const response = await axios.get("http://127.0.0.1:8000/core/api/Basket/", {
          headers: {
            Authorization: `Token ${token}`
          }
        });
        console.log(isBasket)
      } catch (error) {
        console.error("Error basket:", error)
        setError(error.response?.data || "error request")
      }
    }
    fetchBasket();
  }, [])
  if (isError) return <div>error</div>
  if (!isBasket) return <Load />
  console.log(isBasket)
  // === ===



  return (
    <ButtonBasketStyled to={"/Basket"}>
      <SlBasket size={22} />
      <NumberStyled>0</NumberStyled>
    </ButtonBasketStyled>
  );
};
export default ButtonBasket;
