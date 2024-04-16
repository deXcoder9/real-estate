
import { getStoredEstate } from "./script";


const Cart = () => {
    const cart = getStoredEstate()
    return (
        <div className="flex justify-center items-center flex-col my-10">
            <h1 className="text-3xl font__merriweather mb-7 underline">Cart</h1>
            <div className=" border-[1px] border-red-100 p-24 rounded-xl">
                <ul>
                    {
                        cart.map((product, index) => (
                            <li key={index}> {index + 1}.  {product.estate_title}</li>
                        ))}
                </ul>
            </div>
        </div>
    );
};

export default Cart;