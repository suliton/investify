import { motion } from 'framer-motion';
import React from 'react';
import bgImage from '../../../assets/bgimage.jpg'
import Value from '../value';

const Company: React.FC = () => {
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
                        <h1 className="text-[60px] w-[90%] text-white font-bold max-w-[1000px] text-center max-[650px]:text-[40px]">
                        Company Overview
                        </h1>
                        {/* <h1 className="text-[60px] w-[90%] text-white font-bold max-w-[1000px] text-center max-[650px]:text-[40px]">
                            InvestifyEdge
                        </h1> */}
                        <p className='text-white text-center'>We move, create opportunities and protect money for customers and clients worldwide</p>
                    </div>
                </motion.div>
            </div>
            <section className="container mx-auto mt-[50px] mb-[50px] flex items-center justify-between max-[650px]:w-full max-[650px]:flex-col">
                <div className="w-[45%] max-[650px]:w-full p-[20px]">
                    <p className='text-[14px] text-black mt-[10px] mb-[10px]'>About Company</p>
                    <h1 className="text-5xl font-bold mb-6">For a secure and planned future</h1>
                    <p className="text-[16px] mb-6">
                        investifyEdge  is one of the largest and most experienced international private equity firms. We have an established team of investment professionals, who are focused mainly on investment.
                    </p>
                    <p className="text-[16px] mb-6">
                        investifyEdge  is run by a team of trading experts who generate profits by buying and selling currencies, stocks, options and commodities on the foreign exchange market. We employ a variety of trading techniques to achieve the set goals for the client.
                    </p>
                    <p className="text-[16px] mb-6">
                        investifyEdge  consists a team of financial market professionals assembled specifically in order to provide the best possible trading conditions to its customers. Our specialists have been involved in the development of technical specification for designing an up-to-date platform that is suitable for both beginners and experienced traders.
                    </p>
                    <p className="text-[16px] mb-6">
                        As long as we have existed we have been trying to leverage lower risk and higher profits for our customers through innovative and insightful analysis, information dispersion, and expert assistance. Our team of professionals is composed of experienced and skilled experts and professionals, who bring a diverse and in depth knowledge to the entire investing process.
                    </p>
                    <p className="text-[16px] mb-6">
                        Our multi-asset investment approach is aimed at what matters helping you reach your desired outcomes. Portfolio management is the heart of what we do. From our current research studying the market, we are expecting to trigger a long term investment trading strategy which would give our new members guaranteed return on investment for the stipulated time.
                    </p>
                    <button className="bg-[#364A63] text-white px-6 py-3 rounded-full hover:bg-[#364a63a3] transition duration-300">
                        Submit Resume
                    </button>
                </div>

                {/* Image Section */}
                <div className="w-[40%] max-[650px]:w-full">
                    <img
                        src="/about.jpg"
                        alt="Investify Globe staff"
                        className="rounded-md  shadow-lg"
                    />
                </div>
            </section>
            <Value/>
        </>

    );
};

export default Company;
