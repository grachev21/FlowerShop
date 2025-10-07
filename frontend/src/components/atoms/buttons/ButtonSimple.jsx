const ButtonSimple = ({ content, onClick, flag = false }) => {
  return (
    <main className={`text-primary ml-4 font-bold 
                    cursor-pointer transition-all hover:opacity-70 
                    hover:border-b hover:border-primary 
                    ${flag ? "border-b border-primary" : ""}`} onClick={onClick}>
      {content}
    </main>
  );
};
export default ButtonSimple;
