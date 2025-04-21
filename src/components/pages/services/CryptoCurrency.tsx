import { motion } from 'framer-motion';
import Value from '../value';
import { useNavigate } from 'react-router-dom';

const CryptoCurrency = () => {
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
                    <source src="/cryptovideo.mp4" type="video/mp4" />
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
                        Cryptocurrency
                        </h1>
                        <p className='text-white text-center max-[650px]:w-full'>
                        As difficult as it may seem. We make investing in cryptocurrency as easy as possible even to a beginner.
                        </p>
                    </div>
                </motion.div>
            </div>
            <section className="container mx-auto mt-[50px] mb-[50px] flex items-center justify-between max-[650px]:w-full max-[650px]:flex-col">
                <div className="w-1/2 max-[650px]:w-full p-[20px]">
                    <p className='text-[14px] text-black '>About Cryptocurrency</p>
                    <h1 className="text-[40px] font-bold mb-6">Start Your Cryptocurrency Investment Journey</h1>
                    <p className="text-[16px] mb-6">
                    A cryptocurrency is a digital asset designed to work as a medium of exchange wherein individual coin ownership records are stored in a ledger existing in a form of computerized database using strong cryptography to secure transaction records, to control the creation of additional coins, and to verify the transfer of coin ownership
                    </p>
                    <p className="text-[16px] mb-6">
                    Cryptocurrency investment doesn't depend on your country or geography, it doesn't matter where you are. So feel free to invest in these cryptocurrencies with theinvestifyglobe. There are so many cryptocurrencies available to invest in, you do not need to bother about that aspect. We do the hard part while returning daily profits to you based on your investment portfolio.
                    </p>
                    <button className="bg-[#354f5b] text-white px-6 py-3 rounded-full transition duration-300" onClick={() => navigate('/signup')}>
                        Start Membership now
                    </button>
                </div>

                {/* Image Section */}
                <div className="w-[40%] max-[650px]:w-full">
                    <img
                        src="/crypto.jpg"
                        alt="Investify Globe staff"
                        className="rounded-md  shadow-lg"
                    />
                </div>
            </section>
            <Value />
        </>
    )
}

export default CryptoCurrency