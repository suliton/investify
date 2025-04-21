import { motion } from 'framer-motion';
import React from 'react';
import bgImage from '../../../assets/bgimage.jpg'
import { FaLocationDot } from "react-icons/fa6";
import { FaEnvelope } from 'react-icons/fa';
import Value from '../value';
<FaLocationDot />

const Contact: React.FC = () => {
    return (
        <div className='w-full'>
            <div className="w-full h-[100vh] max-[650px]:w-[100%]  bg-cover bg-center bg-no-repeat relative flex justify-center items-center " style={{ backgroundImage: `url(${bgImage})` }}>
                <div className="absolute inset-0 bg-[#0000007b]"></div>
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="w-[60%] bg-[#364a637b] p-[80px] flex flex-col items-center justify-center rounded-[10px] relative max-[650px]:w-[100%]">
                    <div className="w-[100%] flex items-center flex-col justify-center">
                        <h1 className="text-[60px] w-[90%] text-white font-bold max-w-[1000px] text-center max-[650px]:text-[40px]">
                        Contact Us
                        </h1>
                        {/* <h1 className="text-[60px] w-[90%] text-white font-bold max-w-[1000px] text-center max-[650px]:text-[40px]">
                            InvestifyEdge
                        </h1> */}
                        <p className='text-white text-center'>Do you have any queries or suggestions? Please contact us about all enquiries including membership and volunteer work using the form below.</p>
                    </div>
                </motion.div>
            </div>
            <section className="container mx-auto mt-12 flex items-center justify-between max-[650px]:flex-col max-[650px]:gap-[20px] ">
                {/* Text and Info Section */}
                <div className="w-1/2 max-[650px]:w-full max-[650px]:p-[20px]">
                    <p className='font-light text-[16px]'>Let's Talk</p>
                    <h1 className="text-5xl font-bold mb-4">Get in Touch.</h1>
                    <p className="text-lg mb-8">
                        Having troubles, suggestions or information you would like to share? Drop a message.
                    </p>
                    <div className="space-y-4 max-[650px]:w-full" >
                        <div className="flex items-center gap-[10px]">
                            <span className='w-[40px] h-[40px] rounded-full bg-[#364a63] flex items-center justify-center '>
                                <FaLocationDot  className='text-white text-[20px]'/>
                            </span>
                            <span className="material-icons text-lg mr-2">
                                <p className='text-[20px] font-semibold'>Head Office:</p>
                                <p> 55 Roman Way Hanham, Bristol, United Kingdom.</p>
                            </span>
                        </div>
                        <div className="flex items-center gap-[10px]">
                        <span className='w-[40px] h-[40px] rounded-full bg-[#364a63] flex items-center justify-center '>
                                <FaEnvelope  className='text-white text-[20px]'/>
                            </span>
                            <span className="material-icons text-lg mr-2">
                                <p className='text-[20px] font-semibold'>Email Us:</p>
                                <p>theInvestifyEdge@gmail.com</p>
                            </span>                            
                        </div>
                    </div>
                </div>

                {/* Image Section */}
                <div className="w-1/2 max-[650px]:w-full">
                    <img
                        src="/customer.jpg" // Update this with the actual image path
                        alt="Customer support"
                        className="w-full h-auto rounded-md shadow-lg"
                    />
                </div>
            </section>
            <Value/>
        </div>

    );
};

export default Contact;
