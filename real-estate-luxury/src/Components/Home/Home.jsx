import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import { useLoaderData } from 'react-router-dom';
import SingleResort from './SingleResort';
import { useEffect } from 'react';
import Aos from 'aos'
import 'aos/dist/aos.css'


const Home = () => {

    const data = useLoaderData()
    // console.log(data)
    useEffect(() => {
        document.title = "Home"
        Aos.init({ duration: 1000 });
    }, [])

    return (
        <div className='my-4 ' >
            <Swiper
                className='h-[500px] mb-10 -z-0'
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                data-aos="fade-up"
            // onSwiper={(swiper) => console.log(swiper)}
            // onSlideChange={() => console.log('slide change')}
            >
                <SwiperSlide>
                    <div className='w-full h-full relative   first_slider rounded-lg'>

                        <div className='absolute text-left lg:w-[400px] text-white top-[30%] left-[7%] space-y-3'>
                            <h1 className='font__merriweather font-bold text-2xl lg:text-4xl text-white'>Oneeighty°, Indonesia </h1>
                            <p className='text-gray-200 text-sm'>oneeighty° in Indonesia is a luxurious oceanfront venue offering stunning panoramic views, infinity pools, and upscale dining, creating an unparalleled experience of relaxation and indulgence.</p>
                            <button className='btn bg-white text-black border-none hover:text-white hover:bg-black'>View Details</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='w-full h-full relative   second_slider rounded-lg'>
                        <div className='absolute text-left lg:w-[400px] text-white top-[30%] left-[7%] space-y-3'>
                            <h1 className='font__merriweather font-bold text-4xl text-white'>The Azure Haven Estate, Indonesia</h1>
                            <p className='text-gray-200 text-sm'>The Azure Haven Estate in Bali, Indonesia, is a luxurious seaside mansion with sprawling gardens, infinity pools, and panoramic ocean views, offering unparalleled tranquility and opulent living amidst tropical paradise..</p>
                            <button className='btn bg-white text-black border-none hover:text-white hover:bg-black'>View Details</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='w-full h-full relative   third_slider rounded-lg'>
                        <div className='absolute text-left lg:w-[400px] text-white top-[30%] left-[7%] space-y-3'>
                            <h1 className='font__merriweather font-bold text-4xl text-white'>Serenity Cove Island, Indonesia </h1>
                            <p className='text-gray-200 text-sm'>Serenity Cove Island boasts a luxurious mansion nestled amidst palm-fringed beaches and turquoise waters. With panoramic ocean views, infinity pools, and lush gardens, its a secluded paradise of opulent tranquility.</p>
                            <button className='btn bg-white text-black border-none hover:text-white hover:bg-black'>View Details</button>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
            <div>
                <h2 className="text-center text-3xl text-black font__merriweather font-bold" data-aos="slide-right" >Estates</h2>
                <p className="text-center lg:w-[600px] mx-auto text-gray-500" data-aos="slide-right">
                    Estates are large properties, often with a main house and extensive land, commonly associated with wealth, aristocracy, and historical significance.</p>

                <div className="mt-6  grid lg:grid-cols-2 grid-cols-1 md:grid-cols-2 place-items-center space-y-4">
                    {
                        data.map((resort) => <SingleResort key={resort.id} resort={resort}></SingleResort>)
                    }
                </div>
            </div>
        </div >
    );
};

export default Home;