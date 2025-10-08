const FramesOneThree = ({ children }) => {
  return (
    <div
      className="
        grid grid-cols-1
        w-full
        gap-12
        md:grid-cols-2 md:gap-12 
        lg:grid-cols-3 lg:gap-12 
      "
    >
      {children}
    </div>
  );
};

export default FramesOneThree;
