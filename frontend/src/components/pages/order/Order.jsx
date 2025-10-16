import { ButtonBack, MiniImageShadow } from "@/components";

const Basket = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col items-start w-full box-border">
        <ButtonBack content={"Назад"} />
        <div className="font-normal text-2xl mt-4 mb-2">
          Заказы
        </div>
      </div>

      <MiniImageShadow />

    </div>
  );
};

export default Basket;

