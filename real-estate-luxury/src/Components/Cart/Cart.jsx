
import { getStoredEstate } from "./script";


const Cart = () => {
    const cart = getStoredEstate()
    return (
        // <div className="flex justify-center items-center flex-col my-10">
        //     <h1 className="text-3xl font__merriweather mb-7 underline">Cart</h1>
        //     <div className=" border-[1px] border-red-100 p-24 rounded-xl">
        //         <ul>
        //             {
        //                 cart.map((product, index) => (
        //                     <li key={index}> {index + 1}.  {product.estate_title}</li>
        //                 ))}
        //         </ul>
        //     </div>
        // </div>
        <div>
            {
                cart.map((p, inx) => (
                    <div key={inx} className="flex flex-col md:flex-row place-items-center lg:flex-row gap-x-6 books-card p-0 py-4 px-3  my-3 border-[1px] ">
                        <div className="books-bg w-[230px] h-auto">
                            <img className="w-[250px] rounded-2xl" src={p.image} alt="estate-image" />
                        </div>
                        <div>
                            <h2 className="text-xl font-bold pb-2">{p.estate_title}</h2>
                            <p className="text-sm pb-5 text-gray-600 font-semibold">{p.segment_name}</p>
                            <p className="pb-4 flex flex-col lg:flex-row "><span className="font-bold text-[17px]" > Facilities:</span>
                                <div className='flex flex-col lg:flex-row'>
                                    {
                                        p.facilities.map((tag, idx) => <span className="px-4 text-purple-800  " key={idx}> _{tag} </span>)
                                    }
                                </div>
                                <span>Area: {p.area}</span>
                            </p>
                            <div className="flex gap-x-8 text-sm pb-4 text-gray-500">
                                <p>{p.location}</p>
                                <p className=" bg-green-500 px-2 rounded-lg"> {p.status}</p>
                            </div>
                        </div>
                    </div >
                ))
            }
        </div>
    );
};

export default Cart;