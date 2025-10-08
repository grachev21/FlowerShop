const Button = ({ content, type, loading }) => {
  return (
    <main
      type={type}
      disabled={loading}
      className="w-full py-2 text-primary text-lg font-medium text-center
        border border-primary cursor-pointer relative uppercase rounded-field"
    >
      {loading ? content[1] : content[0]}
    </main>
  );
};
export default Button;
