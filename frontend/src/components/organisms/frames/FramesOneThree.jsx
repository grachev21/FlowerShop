const FramesOneThree = ({ children }) => {
  return (
    <div className="
  grid grid-cols-1 gap-16 w-full 
  sm:grid-cols-2 sm:gap-12
  md:grid-cols-3 md:gap-8
">
      {children}
    </div>
  );
};

export default FramesOneThree;