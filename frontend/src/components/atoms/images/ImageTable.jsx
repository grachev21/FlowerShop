const ImageTable = ({ image, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="bg-cover bg-center w-full h-[380px]
        transition-all duration-300 cursor-pointer
        hover:opacity-80 hover:shadow-lg
        sm:h-[280px] md:h-[200px] lg:h-[250px] xl:h-[320px]"
      style={{ backgroundImage: `url(${image})` }}
    />
  );
};

export default ImageTable;
