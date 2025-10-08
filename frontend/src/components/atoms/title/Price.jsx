import { MdOutlineCurrencyRuble } from "react-icons/md";

const Price = ({ content }) => {
    return (
        <main className="flex flex-row items-center text-2xl m-4" >
            <p>{content}</p>
            <MdOutlineCurrencyRuble size={26} />
        </main>
    );
}
export default Price;