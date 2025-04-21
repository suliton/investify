import { FaChartBar, FaLock, FaPenSquare, FaShieldAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const WhyChooseUs = () => {
    return (
        <div className="w-full bg-[#EDF1FC] flex items-center justify-center flex-col h-[600px] max-[650px]:h-auto overflow-hidden mt-[40px] ">
            <div className="w-[90%] flex items-center flex-col justify-center p-[20px] max-[650px]:w-[100%] ">
                <p className="text-[14px] font-light text-[#264653]">Why Choose Us</p>
                <p className="text-[50px] text-center font-bold text-[#264653] max-[650px]:text-[40px]">Smart Investing with Smart Ideas</p>
                <p className="text-[15px] font-light text-center text-[#264653]">
                    investifyEdge have a unique approach to income generation. We build <br />
                    innovative wealth creation products.
                </p>
            </div>
            <div className="w-[90%] flex max-[650px]:gap-[10px] max-[650px]:flex-col items-center justify-around p-[20px]">
                {/* First two divs coming from the left */}
                <motion.div
                    className="w-[20%] flex flex-col items-center gap-2 max-[650px]:w-[100%]"
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="w-[100px] h-[100px] rounded-full bg-white flex items-center justify-center">
                        <FaShieldAlt className="text-[40px] text-[#264653]" />
                    </div>
                    <p className="text-[#264653] text-[24px] font-semibold">Security & Privacy</p>
                    <p className="text-[#264653] text-[14px] text-center">
                        We use the latest technology to protect your information and financial transactions.
                    </p>
                </motion.div>

                <motion.div
                    className="w-[20%] flex flex-col items-center gap-2 max-[650px]:w-[100%]"
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="w-[100px] h-[100px] rounded-full bg-white flex items-center justify-center">
                        <FaPenSquare className="text-[40px] text-[#264653]" />
                    </div>
                    <p className="text-[#264653] text-[24px] font-semibold">Investing Tools</p>
                    <p className="text-[#264653] text-[14px] text-center">
                        From strategy to analysis, our tools help you keep track of your finances with ease.
                    </p>
                </motion.div>

                {/* Next two divs coming from the right */}
                <motion.div
                    className="w-[20%] flex flex-col items-center gap-2 max-[650px]:w-[100%]"
                    initial={{ x: 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="w-[100px] h-[100px] rounded-full bg-white flex items-center justify-center">
                        <FaLock className="text-[40px] text-[#264653]" />
                    </div>
                    <p className="text-[#264653] text-[24px] font-semibold">Asset Protection</p>
                    <p className="text-[#264653] text-[14px] text-center">
                        We also participate in asset protection programs to further secure your funds.
                    </p>
                </motion.div>

                <motion.div
                    className="w-[20%] flex flex-col items-center gap-2 max-[650px]:w-[100%]"
                    initial={{ x: 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="w-[100px] h-[100px] rounded-full bg-white flex items-center justify-center">
                        <FaChartBar className="text-[40px] text-[#264653]" />
                    </div>
                    <p className="text-[#264653] text-[24px] font-semibold">Investment Access</p>
                    <p className="text-[#264653] text-[14px] text-center">
                        We are providing investors access to investments previously available to the top 1%.
                    </p>
                </motion.div>
            </div>
        </div>
    );
};

export default WhyChooseUs;
