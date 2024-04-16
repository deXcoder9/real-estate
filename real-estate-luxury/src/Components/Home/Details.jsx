
import { useLoaderData, useParams } from "react-router-dom";
import { saveEstates } from "../Cart/script";
import { useContext } from "react";
import { AuthContext } from "../../Auth Provider/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Details = () => {
    const { userInfo } = useContext(AuthContext)
    console.log(userInfo)
    const properties = useLoaderData()
    // console.log(properties)
    const { id } = useParams()
    const idInt = parseInt(id)

    const property = properties.find(pp => pp.id == idInt)
    const { segment_name, area, estate_title, price, description, facilities, status, location, image } = property;


    const addToCart = () => {
        toast.success('Added to the Cart')
        saveEstates(property)
    };
    // const ErrorCard = () =>{
    //     alet
    // }
    return (
        <div className="my-10">
            <div className="resorts_COntainer ">

                <div className="w-full  p-3  rounded-xl">
                    <img className="w-full rounded-xl h-[600px] " src={image} alt="" />
                    <h2 className="font__merriweather text-2xl">{estate_title}</h2>
                    <small>{segment_name}</small>
                    <p className="text-gray-500">{description}</p>
                    <div className='flex space-x-7 py-1'>
                        <p className=' '>{area}</p>
                        <p>{location}</p>
                    </div>
                    <div className="flex space-x-4 ">
                        {
                            facilities.map((info, idx) => <p key={idx} className='capitalize'> {info} </p>)
                        }
                    </div>
                    <div className="flex space-x-8 py-3">
                        <p className='py-1 text-red-500 capitalize'>{price}</p>
                        <p className='uppercase bg-green-500 py-1 rounded-xl text-white px-5'>{status}</p>
                    </div>

                    {
                        userInfo ?
                            <button onClick={addToCart} className="btn btn-primary">Add To Card</button>
                            :
                            <button onClick={() => toast.error('Please sign in first ')} className="btn btn-primary">Add To Card</button>
                    }
                    <ToastContainer />
                </div>
            </div>
        </div>
    );
};

export default Details;