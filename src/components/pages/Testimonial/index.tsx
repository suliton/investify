import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import workSpace from '../../../assets/workplace.jpg';
import './TestimonialSlider.css'
// Define testimonial structure
interface Testimonial {
    name: string;
    feedback: string;
    img: string;
    job: string
}

// Sample testimonials
const testimonials: Testimonial[] = [
    { name: 'John Doe', feedback: 'Be sure to invest with the right company always. There is no doubt about the credibility of this company. A very big Thank You to the Management.', img: '/1.jpg', job: 'Entreprenuer' },
    { name: 'Robert Brown', feedback: 'The ability to diversify your portfolio is a great feature. Investing into various services offered including NFTs is really awesome. I love the management.', img: '/3.jpg', job: 'Business Woman' },
    { name: 'Jane Smith', feedback: 'Amazing work! This guys also very fast for support. No matter Sunday or Monday. I get my answers and they were really patiently with my sometimes stupid questions!', img: '/2.jpg', job: 'Manager' },
    { name: 'Robert Brown', feedback: 'The ability to diversify your portfolio is a great feature. Investing into various services offered including NFTs is really awesome. I love the management.', img: '/3.jpg', job: 'Business Woman' },
    // { name: 'Robert Brown', feedback: 'The ability to diversify your portfolio is a great feature. Investing into various services offered including NFTs is really awesome. I love the management.', img: '/3.jpg', job: 'Business Woman' },
];

const TestimonialSlider: React.FC = () => {
    return (
        <div className="relative w-full h-[550px] flex items-center justify-center bg-cover bg-center bg-no-repeat mt-[40px]" style={{ backgroundImage: `url(${workSpace})` }}>
            <div className="absolute inset-0 bg-[#0000007b]"></div>
            <div className='w-[70%] h-[100%] flex flex-col items-center justify-center max-[650px]:w-full'>
                <span className='py-[40px] z-[2]'>
                    <p className='text-[12px] text-white text-center'>Testimonial</p>
                    <p className='text-[50px] text-white font-bold max-[650px]:text-[40px]'>What Clients Say</p>
                </span>
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={40}
                    loop={true}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    breakpoints={{
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        650: {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                    }}
                    className="swiper-container w-[100%] max-[650px]:w-full"
                >
                    {testimonials.map((testimonial, index) => (
                        <SwiperSlide key={index} className='w-[100%]'>
                            <div className="shadow-lg w-[300px] max-[650px]:w-full">
                                <div className='p-6 bg-white h-[250px] w-full flex items-center max-[650px]:w-[90%]'>
                                    <p className="text-gray-600">{testimonial.feedback}</p>
                                </div>
                                <div className='mt-[20px] flex gap-[10px]'>
                                    <img src={testimonial?.img} alt="" className='w-[50px] h-[50px] rounded-full' />
                                    <span>
                                        <p className='text-white'>{testimonial.name}</p>
                                        <p className='font-light text-[14px] text-white'>{testimonial.job}</p>
                                    </span>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default TestimonialSlider;
