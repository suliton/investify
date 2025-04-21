import { motion } from "framer-motion";
import bgImage from '../../../assets/bgimage.jpg'
import frequncy from '../../../assets/frequency.jpg'
import explore from '../../../assets/explore.jpg'
import wealth from '../../../assets/wealth.jpg'

const Purpose = () => {
    return (
        <div className="w-full flex items-center justify-center overflow-hidden mt-[40px] ">
            <div className="w-[90%] flex justify-between max-[650px]:flex-col">
                <motion.div
                    className="flex flex-col w-[30%] font-bold max-[650px]:w-[100%]"
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <p className="text-[14px] font-light">Our Purpose</p>
                    <p className="text-[50px] max-[650px]:text-[30px] ">Our common Purpose is Creating opportunities to rise.</p>
                </motion.div>
                <div className="flex w-[60%] max-[650px]:flex-col max-[650px]:w-[100%]">
                    <div className="flex flex-col w-[50%] gap-[20px] max-[650px]:w-[100%]">
                        <motion.div
                            initial={{ y: 100, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8 }}
                            className="flex flex-col gap-[10px] items-center justify-center w-[320px] h-[400px] shadow-lg bg-white max-[650px]:w-[100%] ">
                            <motion.div
                                whileHover={{ scale: 1.02, boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.2)" }}
                                className="w-full h-[50%]">
                                <img src={explore}  alt="" className="w-[100%] h-[100%] object-fill" />
                            </motion.div>
                            <div className="p-[20px] gap-[10px] h-[50%] flex flex-col items-center justify-center">
                                <p className="text-[24px] font-bold max-[650px]:text-[20px]">Explore With Us</p>
                                <p className="text-center text-[12px]">Seize the opportunity to grow your capital in the cryptocurrency market by copying the trades of top preforming traders in our investment programme</p>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ y: 100, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8 }}
                            className="flex flex-col gap-[10px] items-center justify-center w-[320px] h-[400px] shadow-lg bg-white max-[650px]:w-[100%] ">
                            <motion.div
                                whileHover={{ scale: 1.02, boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.2)" }}
                                className="w-full h-[50%]">
                                <img src={frequncy}  alt="" className="w-[100%] h-[100%] object-fill" />
                            </motion.div>
                            <div className=" w-[100%] p-[20px] gap-[10px] h-[50%] flex flex-col items-center justify-center">
                                <p className="text-[24px] font-bold max-[650px]:text-[20px]">High Frequency Trading</p>
                                <p className="text-center text-[12px]">Global institutions, leading hedge funds and industry innovators turn to investifyEdge  for bitcoin cryptocurrency trading advice and market-making services.</p>
                            </div>
                        </motion.div>
                    </div>
                    <div className="flex flex-col w-[50%] gap-[20px] mt-[40px] max-[650px]:w-[100%]">
                        <motion.div
                            initial={{ y: 100, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8 }}
                            className="flex flex-col gap-[10px] items-center justify-center w-[320px] h-[400px] shadow-lg bg-white  max-[650px]:w-[100%]">
                            <motion.div
                                whileHover={{ scale: 1.02, boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.2)" }}
                                className="w-full h-[50%]">
                                <img src={bgImage} alt="" className="w-[100%] h-[100%] object-fill" />
                            </motion.div>
                            <div className="p-[20px] gap-[10px] h-[50%] flex flex-col items-center justify-center">
                                <p className="text-[24px] font-bold max-[650px]:text-[20px] ">Investment Management</p>
                                <p className="text-center text-[12px]">We deliver active bitcoin investment strategies across public and private markets and custom solutions to institutional and individual investors.</p>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ y: 100, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8 }}
                            className="flex flex-col gap-[10px] items-center justify-center w-[320px] h-[400px] shadow-lg bg-white  max-[650px]:w-[100%]">
                            <motion.div
                                whileHover={{ scale: 1.02, boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.2)" }}
                                className="w-full h-[50%]">
                                <img src={wealth} alt="" className="w-[100%] h-[100%] object-fill" />
                            </motion.div>
                            <div className="p-[20px] gap-[10px] h-[50%] flex flex-col items-center justify-center">
                                <p className="text-[24px] font-bold max-[650px]:text-[20px]">Wealth Management</p>
                                <p className="text-center text-[12px]">We help people, businesses and institutions build, preserve and manage wealth so they can pursue their financial goals.</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Purpose