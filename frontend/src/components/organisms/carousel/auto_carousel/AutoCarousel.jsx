const AutoCarousel = ({ data }) => {
  return (
    <main className="carousel w-full ">
      {data.map((value, index) => (
        <div key={index} id={`slide-${index}`} className="carousel-item relative w-full">
          <img src={value.img} className="w-full h-[450px] bg-contain bg-center" alt={`Slide ${index + 1}`} />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href={`#slide-${(index - 1 + data.length) % data.length}`} className="btn btn-circle">
              ❮
            </a>
            <a href={`#slide-${(index + 1) % data.length}`} className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      ))}
    </main>
  );
};

export default AutoCarousel;
