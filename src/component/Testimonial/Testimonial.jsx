import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import Heading from '../Heading/Heading'
import 'swiper/css';
import 'swiper/css/navigation';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import Customer1 from '../../assets/customer1.jpg'
import Customer2 from '../../assets/customer2.jpg'
import Customer3 from '../../assets/customer3.jpg'
import Customer4 from '../../assets/customer4.jpg'
import Customer5 from '../../assets/customer5.jpg'
import { FaStar } from 'react-icons/fa';

const Testimonial = () => {


    return (
        <section>
            <div className='max-w-[1400px] mx-auto px-10 py-20'>
                <Heading highlight="Customers" heading="Saying" />
                <div className='flex justify-end mt-5 py-5 gap-x-3'>
                    <button className='custom-prev text-2xl text-zinc-800 rounded-lg w-11 h-11 flex justify-center items-center bg-zinc-100 hover:bg-gradient-to-b hover:from-orange-400 hover:to-orange-500 hover:text-white cursor-pointer'>
                        <IoIosArrowBack />
                    </button>
                    <button className='custom-next text-2xl text-zinc-800 rounded-lg w-11 h-11 flex justify-center items-center bg-zinc-100 hover:bg-gradient-to-b hover:from-orange-400 hover:to-orange-500 hover:text-white cursor-pointer'>
                        <IoIosArrowForward />
                    </button>
                </div>
                <Swiper
                 navigation={{
                    nextEl:".custom-next",
                    prevEl:".custome-prev"
                 }}
                 loop={true}
                 breakpoints={{
                    640:{slidesPerView:1, spaceBetween:20},
                    768:{slidesPerView:2, spaceBetween:20},
                    1024:{slidesPerView:3, spaceBetween:20},
                 }}
                  modules={[Navigation]} className="mySwiper">
                    {
                        review.map(item => {
                            return (
                                <SwiperSlide className='bg-zinc-100 rounded-xl p-8'>
                                    <div className='flex gap-5 items-center'>
                                        <div className='w-16 h-16 rounded-full bg-red-500 outline-2 outline-orange-500 outline-offset-4 overflow-hidden'>
                                            <img src={item.image} className='w-full h-full'/>

                                        </div>
                                        <div>
                                            <h5 className='text-xl font-bold'>{item.name}</h5>
                                            <p className='text-zinc-600'>{item.profession}</p>
                                            <span className='flex text-yellow-400 mt-3 text-xl gap-1'>
                                                {Array.from({length:item.rating}, (_, index)=>(
                                                    <FaStar />
                                                ))}
                                            </span>
                                        </div>
                                    </div>
                                    <div className='mt-10 min-h-[15vh]'>
                                        <p className='text-zinc-600'>{item.para}</p>
                                    </div>

                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
                
            </div>
        </section>
    )
}

export default Testimonial
const review = [
    {
        id: 1,
        name: 'Dipti Arya',
        profession: 'Food Blogger',
        rating: 3,
        para: 'The grocery quality is decent and prices are reasonable. Fresh produce is mostly good, but sometimes delivery takes longer than expected. Overall, a satisfactory experience for regular grocery shopping.',
        image: Customer1,
    },
    {
        id: 2,
        name: 'Nihal Kapoor',
        profession: 'Home Chef',
        rating: 5,
        para: 'Absolutely love this grocery website! Vegetables are always fresh, packaging is neat, and delivery is super fast. It saves a lot of time and the quality never disappoints.',
        image: Customer2,
    },
    {
        id: 3,
        name: 'Muskan Sharma',
        profession: 'Fitness Trainer',
        rating: 4,
        para: 'Great place to order healthy groceries. Fruits, dry fruits, and organic items are of very good quality. Prices are fair and discounts are helpful. Just wish there were more delivery slots.',
        image: Customer3,
    },
    {
        id: 4,
        name: 'Mohit Tiwari',
        profession: 'Working Professional',
        rating: 3,
        para: ' Quality is okay, best service',
        image: Customer4,
    },
    {
        id: 5,
        name: 'Ankita Tiwari',
        profession: 'Restaurant Owner',
        rating: 4,
        para: 'Reliable grocery platform for bulk purchases. Stock availability is good and items are fresh. Delivery is mostly on time, making it useful for both home and business needs.',
        image: Customer5,
    }

]