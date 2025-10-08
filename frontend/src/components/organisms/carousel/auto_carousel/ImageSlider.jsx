import { useState } from "react";

const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="h-full relative">
      {/* Текущий слайд */}
      <div
        className="w-full h-full rounded-xl bg-cover bg-center"
        style={{ backgroundImage: `url(${slides[currentIndex]?.img})` }}
      />

      {/* Левая стрелка */}
      <div
        onClick={goToPrevious}
        className="absolute top-1/2 -translate-y-1/2 left-8 text-4xl text-base-100 z-10 cursor-pointer hover:opacity-80 transition-opacity"
      >
        ‹
      </div>

      {/* Правая стрелка */}
      <div
        onClick={goToNext}
        className="absolute top-1/2 -translate-y-1/2 right-8 text-4xl text-base-100 z-10 cursor-pointer hover:opacity-80 transition-opacity"
      >
        ›
      </div>
    </div>
  );
};

export default ImageSlider;
