import { useAuthPost } from "@/hooks";

const ButtonAddBasket = ({ productId }) => {
  const { post, loading, error, data } = useAuthPost("http://127.0.0.1:8000/core/api/Basket/");

  const handleClick = async () => {
    try {
      const result = await post({
        product: productId,
        quantity: 1,
      });
    } catch (err) { }
  };
  return (
    <button onClick={handleClick} className="relative py-2 uppercase text-lg font-normal w-full 
                text-center text-primary border border-primary 
                cursor-pointer hover:bg-primary/20 transition-all
                rounded-field">
      ДОБАВИТЬ В КОРЗИНУ
    </button>
  );
};
export default ButtonAddBasket;
