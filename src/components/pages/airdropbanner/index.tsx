import workSpace from '../../../assets/workplace.jpg'
import { motion } from "framer-motion";
const AirDropBanner = () => {
    return (
        <div >
            <motion.div
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="w-full h-[300px]">
                <div className="w-full h-full bg-cover bg-center bg-no-repeat relative box-border flex items-center justify-center flex-col " style={{ backgroundImage: `url(${workSpace})` }}>
                    <div className="absolute inset-0 bg-[#0000007b] "></div>
                    <div className="w-[90%] z-[2] flex items-center justify-center flex-col gap-[20px]">
                        <p className="text-white text-[20px] font-semibold max-[650px]:text-[15px]">SERVER AIRDROP ACTIVE</p>
                        <p className="text-[40px] text-white max-[650px]:text-[25px] text-center">Register now to claim your Airdrops. Offer Ends Soon</p>
                        <button className="p-[10px] w-[200px] text-white bg-[#E93C05] border-none">Claim Airdrops</button>
                    </div>
                </div>
            </motion.div>
            <div className='w-full flex items-center justify-center'>
                <div className='w-[60%] p-[40px] bg-white shadow-lg flex flex-col items-center justify-center gap-3 max-[650px]:w-full '>
                    <p className="text-[14px] font-light">Overview</p>
                    <p className="text-[50px] max-[650px]:text-[30px]">Start a Good Plan</p>
                    <p className='text-[14px] max-[650px]:text-center'>Think about what you want, make the best out of it by starting with us today. we are always available to make the right choice for you.</p>
                    <p className='text-[14px] max-[650px]:text-center'>Our experts are the best in everything. They are well trained in forex, crypto-currency trading and also in giving investment advices.</p>
                </div>
            </div>
        </div>
    )
}

export default AirDropBanner