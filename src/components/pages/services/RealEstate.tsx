import { motion } from 'framer-motion';
import Value from '../value';
import { useNavigate } from 'react-router-dom';

const RealEstates = () => {
    const navigate = useNavigate()
    return (
        <>
            <div className="w-full h-[100vh] max-[650px]:w-[100%] relative flex justify-center items-center">
                {/* Video Background */}
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                >
                    <source src="/video11.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                {/* Overlay */}
                <div className="absolute inset-0 bg-[#0000007b]"></div>

                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="w-[60%] bg-[#364a637b] p-[80px] flex flex-col items-center justify-center rounded-[10px] relative max-[650px]:w-[100%]"
                >
                    <div className="w-[100%] flex items-center flex-col justify-center">
                        <h1 className="text-[60px] w-[90%] text-white font-bold max-w-[1000px] text-center max-[650px]:text-[40px] max-[650px]:w-full">
                            Real Estate
                        </h1>
                        <p className='text-white text-center max-[650px]:w-full'>
                            You can now invest in real estate and own physical properties with investifyEdge
                        </p>
                    </div>
                </motion.div>
            </div>
            <section className="container mx-auto mt-[50px] mb-[50px] flex items-center justify-between max-[650px]:w-full max-[650px]:flex-col">
                <div className="w-1/2 max-[650px]:w-full p-[20px]">
                    <p className='text-[14px] text-black '>About Real Estate</p>
                    <h1 className="text-[40px] font-bold mb-6">Create Passive Income Through Real Estate
                        f</h1>
                    <p className="text-[16px] mb-6">
                        Real estate investing involves the purchase, ownership, management, rental and/or sale of real estate for profit.
                    </p>
                    <p className="text-[16px] mb-6">

                        Real estate is an asset form with liquidity relative to other investments, it is also capital intensive and is highly cash flow dependent. If these factors are not well understood and managed by the investor, real estate becomes a risky investment. This is why investing with investifyEdge is the best option, we don't only make real estate investment cost effective, every risk involved is also curtailed leaving you with guaranteed profits.
                    </p>
                    <button className="bg-[#354f5b] text-white px-6 py-3 rounded-full transition duration-300" onClick={() => navigate('/signup')}>
                        Start Membership now
                    </button>
                </div>

                {/* Image Section */}
                <div className="w-[40%] max-[650px]:w-full">
                    <img
                        src="/realestate.jpg"
                        alt="Investify Globe staff"
                        className="rounded-md  shadow-lg"
                    />
                </div>
            </section>
            <Value />
        </>
    )
}

export default RealEstates