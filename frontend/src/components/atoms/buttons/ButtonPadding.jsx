const ButtonPadding = ({ onClick, content }) => {
  return (
    <div
      onClick={onClick}
      className="relative py-2 uppercase text-lg font-normal w-full 
                text-center text-primary border border-primary 
                cursor-pointer hover:bg-primary/20 transition-all
                rounded-field"
    >
      {content}
    </div>
  );
};

export default ButtonPadding;
