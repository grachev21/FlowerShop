import { useState } from "react";
import BuyModalContent from "./components/BuyModalContent";

const Buy = ({ productId }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <main>
      {isModalOpen && <BuyModalContent productId={productId} onClose={handleCloseModal} />}

      <button className="btn btn-success mt-2" onClick={handleOpenModal}>
        КУПИТЬ
      </button>
    </main>
  );
};


export default Buy;
