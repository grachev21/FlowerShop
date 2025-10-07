import { useState } from "react";

const AutoCarousel = ({ data }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % data.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + data.length) % data.length);
  };

  return (
    <main className="carousel w-full relative overflow-hidden rounded-lg">
      <div className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {data.map((value, index) => (
          <div
            key={index}
            className="carousel-item w-full flex-shrink-0 relative"
          >
            <img
              src={value.img}
              className="w-full h-[450px] object-cover"
              alt={`Slide ${index + 1}`}
            />
          </div>
        ))}
      </div>

      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <button onClick={prevSlide} className="btn btn-circle bg-white/50 hover:bg-white/70">
          ❮
        </button>
        <button onClick={nextSlide} className="btn btn-circle bg-white/50 hover:bg-white/70">
          ❯
        </button>
      </div>
    </main>
  );
};

export default AutoCarousel;