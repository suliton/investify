import { motion } from 'framer-motion'
import bgImage from '../../../assets/bgimage.jpg'

const NeedHelp = () => {
    return (
        <div className="w-full flex items-center justify-center mt-[50px] bg-cover bg-center relative bg-no-repeat" style={{ backgroundImage: `url(${bgImage})` }}>
            {/* <div className="absolute inset-0 bg-black opacity-20 "></div> */}
            < motion.div
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.4 }}
                className="w-[95%]">
                <div
                    className="w-[650px] h-[300px] bg-[#364a63] opacity-80 p-[20px] flex  flex-col gap-[10px] max-[650px]:w-[100%]">
                    <p className='text-[50px] w-[90%] text-white font-bold max-w-[1000px] max-[650px]:text-[40px] '>Need help?</p>
                    <span className='w-[100px] h-[5px] bg-white flex'></span>
                    <p className='text-[20px] text-white'>Don't hesitate to contact us.</p>
                    <button className="p-[10px] w-[200px] text-white bg-[#E93C05] border-none">Contact us</button>
                </div>
            </motion.div>
        </div>
    )
}

export default NeedHelp