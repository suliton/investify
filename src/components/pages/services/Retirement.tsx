import { motion } from 'framer-motion';
import Value from '../value';
import { useNavigate } from 'react-router-dom';

const Retirement = () => {
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
                <source src="/video14.mp4" type="video/mp4" />
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
                    Retirement
                    </h1>
                    <p className='text-white text-center max-[650px]:w-full'>
                    Start now to plan and save for your retirement. theinvestifyglobe has the best retirement plan.
                    </p>
                </div>
            </motion.div>
        </div>
            <section className="container mx-auto mt-[50px] mb-[50px] flex items-center justify-between max-[650px]:w-full max-[650px]:flex-col">
                <div className="w-1/2 max-[650px]:w-full p-[20px]">
                    <p className='text-[14px] text-black '>About Retirement</p>
                    <h1 className="text-[40px] font-bold mb-6">Start Now To Secure Your Future</h1>
                    <p className="text-[16px] mb-6">This include the financial strategies of saving, investment, and ultimately distribution of money meant to sustain one's self during retirement.</p>
                    <p className="text-[16px] mb-6">
                        The emphasis one puts on retirement planning changes throughout different life stages. Early in a person's working life, retirement planning is about setting aside enough money for retirement. During the middle of your career, it might also include setting specific income or asset targets and taking the steps to achieve them. Once you reach retirement age, you go from accumulating assets to what planners call the distribution phase. You’re no longer paying in; instead, your decades of saving with investifyEdge are paying out.
                    </p>
                    <button className="bg-[#354f5b] text-white px-6 py-3 rounded-full transition duration-300" onClick={() => navigate('/signup')}>
                        Start Membership now
                    </button>
                </div>

                {/* Image Section */}
                <div className="w-[40%] max-[650px]:w-full">
                    <img
                        src="/retirement.jpg"
                        alt="Investify Globe staff"
                        className="rounded-md  shadow-lg"
                    />
                </div>
            </section>
            <Value />
        </>
    )
}

export default Retirement