import { motion } from 'framer-motion';
import Value from '../value';
import { useNavigate } from 'react-router-dom';

const Stock = () => {
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
            <source src="/video16.mp4" type="video/mp4" />
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
                Stocks & ETFs
                </h1>
                <p className='text-white text-center max-[650px]:w-full'>
                theinvestifyglobe is here to guide you through your investment while yielding returns.
                </p>
            </div>
        </motion.div>
    </div>
    <section className="container mx-auto mt-[50px] mb-[50px] flex items-center justify-between max-[650px]:w-full max-[650px]:flex-col">
        <div className="w-1/2 max-[650px]:w-full p-[20px]">
            <p className='text-[14px] text-black '>About Stocks & ETFs</p>
            <h1 className="text-[40px] font-bold mb-6">Stocks & ETFs Investment</h1>
            <p className="text-[16px] mb-6">
            An exchange-traded fund is a type of investment fund and exchange-traded product that is traded on stock exchanges.
            </p>
            <p className="text-[16px] mb-6">
            ETFs are similar in many ways to mutual funds, except that ETFs are bought and sold throughout the day on stock exchanges. ETFs are created by large money managers which bundle the underlying instruments of the fund together. After a series of regulatory steps, an ETF can be offered for sale to the public and can be purchased through theinvestifyglobe.
            </p>
            <button className="bg-[#354f5b] text-white px-6 py-3 rounded-full transition duration-300" onClick={() => navigate('/signup')}>
                Start Membership now
            </button>
        </div>

        {/* Image Section */}
        <div className="w-[40%] max-[650px]:w-full">
            <img
                src="/stocks.jpg"
                alt="Investify Globe staff"
                className="rounded-md  shadow-lg"
            />
        </div>
    </section>
    <Value />
</>
  )
}

export default Stock