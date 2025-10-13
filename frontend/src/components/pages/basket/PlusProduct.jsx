const = PlusProduct({ product, id, quantity }) => {
  return (
    <button
      onClick={() => plusProduct(product, id, quantity)}
      className="bg-primary text-base-100 text-xl rounded-full w-6 h-6 p-0.5 cursor-pointer hover:bg-primary/80 transition-all"
    >
      <RxPlus />
    </button>
  )
}
export default PlusProduct;

