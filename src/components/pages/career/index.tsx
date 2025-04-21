import { motion } from 'framer-motion';
import React from 'react';
import bgImage from '../../../assets/bgimage.jpg'
import Value from '../value';

const CareerSection: React.FC = () => {
    return (
        <>
            <div className="w-full h-[100vh] max-[650px]:w-[100%]  bg-cover bg-center bg-no-repeat relative flex justify-center items-center " style={{ backgroundImage: `url(${bgImage})` }}>
                <div className="absolute inset-0 bg-[#0000007b]"></div>
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="w-[60%] bg-[#364a637b] p-[80px] flex flex-col items-center justify-center rounded-[10px] relative max-[650px]:w-[100%]">
                    <div className="w-[100%] flex items-center flex-col justify-center">
                        <h1 className="text-[60px] w-[90%] text-white font-bold max-w-[1000px] text-center max-[650px]:text-[40px] max-[650px]:w-full">
                            Join
                        </h1>
                        <h1 className="text-[60px] w-[90%] text-white font-bold max-w-[1000px] text-center max-[650px]:text-[40px] max-[650px]:w-full">
                            InvestifyEdge
                        </h1>
                        <p className='text-white text-center max-[650px]:w-full'>Help us build the future by empowering everyday people to generate income and control their wealth</p>
                    </div>
                </motion.div>
            </div>
            <section className="container mx-auto mt-[50px] mb-[50px] flex items-center justify-between max-[650px]:w-full max-[650px]:flex-col">
                <div className="w-1/2 max-[650px]:w-full p-[20px]">
                    <p className='text-[14px] text-black '>Work With Us</p>
                    <h1 className="text-[40px] font-bold mb-6">Become a investifyEdge  staff</h1>
                    <p className="text-[14px] mb-6">
                        At investifyEdge , each of us is a captain of our spaceship and free to come up
                        with new ideas to improve our journey. We’re empowered to make decisions for
                        ourselves, for our team, and even for our leaders in order to innovate and build trust.
                        Join us in our mission to give our customers greater choice, independence, and opportunity.
                    </p>
                    <p className="text-[14px] mb-6">
                        Submit your application through our site. If your skills appear to be a good match for the role,
                        you’ll hear from us regarding next steps. If you don’t move forward in the process at this time,
                        there are always other opportunities!
                    </p>
                    <button className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition duration-300">
                        Submit Resume
                    </button>
                </div>

                {/* Image Section */}
                <div className="w-[40%] max-[650px]:w-full">
                    <img
                        src="/career.jpg"
                        alt="Investify Globe staff"
                        className="rounded-md  shadow-lg"
                    />
                </div>
            </section>
            <Value/>
        </>

    );
};

export default CareerSection;
