import { useAuthPost } from "@/hooks";

const ButtonAddBasket = ({ productId }) => {
  const { post, loading, error, data } = useAuthPost("http://127.0.0.1:8000/core/api/Basket/");

  const handleClick = async () => {
    try {
      const result = await post({
        product: productId,
        quantity: 1,
      });
    } catch (err) {}
  };
  return (
    <button onClick={handleClick} className="btn btn-outline btn-primary w-full">
      ДОБАВИТЬ В КОРЗИНУ
    </button>
  );
};
export default ButtonAddBasket;
