import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react';

const SingleResort = ({ resort }) => {
    const { id, segment_name, area, estate_title, price, description, facilities, status, location, image } = resort;
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, [])
    return (
        <div>
            <div className="resorts_COntainer">
                <div className="lg:w-[540px]  md:w-[340px] p-3 border-[1px]  rounded-xl" data-aos="zoom-out-up">
                    <img className="w-full rounded-xl h-[270px] " src={image} alt="" />
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
                    <div className="flex space-x-8 py-3 justify-between">
                        <p className='py-1 text-red-500 capitalize'>{price}</p>
                        <p className='uppercase bg-gray-700 -translate-x-5 translate-y-5 rotate-[20deg] py-1 rounded-xl text-white px-5'>{status}</p>
                    </div>
                    <Link to={`/details/${id}`} className="btn bg-black opacity-90 text-white hover:text-black">view Property</Link>
                </div>
            </div>
        </div >
    );
};

SingleResort.propTypes = {
    resort: PropTypes.object
}

export default SingleResort;